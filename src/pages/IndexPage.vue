<template>
    <q-page class="flex flex-center">
        <div id="content-pane">
            <user-actions @next="onClickNext" @previous="onClickPrevious" />
            <div id="media-box">
                <div class="media">
                    <image-display
                        :class="{
                            fade: true,
                            'fade-in': displayImage,
                        }"
                        ref="imageDisplay"
                        @load="onMediaLoad"
                        @error="onMediaError"
                    />
                </div>
                <div class="media">
                    <video-display
                        :class="{
                            fade: true,
                            'fade-in': !displayImage,
                        }"
                        ref="videoDisplay"
                        @load="onMediaLoad"
                        @error="onMediaError"
                        @end="onMediaEnd"
                    />
                </div>
            </div>
            <div id="info-box">
                <date-block id="date" :value="currentMedia?.date" />
                <progress-block id="progress" :current="cycleManager.getIndex()" :max="cycleManager.getMax()" />
            </div>
            <version-block id="version" :value="version" />
        </div>
    </q-page>
</template>

<script>
import ImageDisplay from "src/components/ImageDisplay.vue";
import VideoDisplay from "src/components/VideoDisplay.vue";
import DateBlock from "src/components/DateBlock.vue";
import ProgressBlock from "src/components/ProgressBlock.vue";
import VersionBlock from "src/components/VersionBlock.vue";
import UserActions from "src/components/UserActions.vue";
import { useMediaStore } from "src/stores/media-store";
import { useSettingsStore } from "src/stores/settings-store";
import CycleManager from "src/core/CycleManager";
import VERSION from "src/core/Version";

import { defineComponent } from "vue";

export default defineComponent({
    components: { ImageDisplay, VideoDisplay, DateBlock, VersionBlock, ProgressBlock, UserActions },
    name: "IndexPage",
    setup() {
        const mediaStore = useMediaStore();

        const cycleManager = new CycleManager();

        mediaStore.$onAction(({ name, store, args, after, onError }) => {
            switch (name) {
                case "addItem": {
                    after((result) => {
                        if (result === false) return;
                        cycleManager.addOne();
                    });
                    break;
                }

                case "removeItem": {
                    const index = args[0];
                    after((result) => {
                        if (result === false) return;
                        cycleManager.removeIndex(index);
                    });
                    break;
                }
            }
        });

        return {
            mediaStore,
            cycleManager,
            settingsStore: useSettingsStore(),
            version: VERSION.asString(),
        };
    },
    created() {
        this.cycleManager.on("indexchanged", (nVal, oVal) => {
            console.debug(`Index changed from ${oVal} -> ${nVal}`);
            if (nVal < 0) return;

            const media = this.mediaStore.mediaItems[nVal];
            if (media === undefined) return;

            const oldMedia = this.mediaStore.mediaItems[oVal];
            const change = oldMedia === undefined || oldMedia.is_video !== media.is_video;

            if (change && media.is_video) this.$refs.videoDisplay?.stop();
            if (change && !media.is_video) this.$refs.imageDisplay?.stop();

            this.displayImage = !media.is_video;

            if (this.displayImage) {
                this.$refs.imageDisplay.start(media.url);
            } else {
                this.$refs.videoDisplay?.start(media.url);
            }

            this.currentMedia = media;
        });
    },
    data() {
        return {
            displayImage: true,
            currentMedia: null,
        };
    },
    computed: {
        timeout() {
            return this.settingsStore["timeout"];
        },
        cutoffVideo() {
            return this.settingsStore["cutoffVideo"];
        },
    },
    watch: {
        "mediaStore.count"(nVal, oVal) {
            const diff = nVal - oVal;
            if (diff < 0) {
                // less items
                return;
            }
        },
    },
    methods: {
        nextMedia(count = 1) {
            this.cycleManager.popIndex(count);
        },
        onMediaLoad() {
            if (this.currentMedia?.is_video === true && !this.cutoffVideo) return;
            this.timer = setTimeout(() => this.nextMedia(), this.timeout);
        },
        onMediaEnd() {
            clearTimeout(this.timer);
            this.nextMedia();
        },
        onMediaError(error) {
            const media = this.currentMedia;

            const name = !media ? "?" : media.is_video ? "video" : "image";
            const source = media.url ?? "?";

            const mediaDetails = !media ? "{null}" : JSON.stringify(media);

            console.error(`Could not load ${name} from source ${source}\n\n(${JSON.stringify(error)})\n\n${mediaDetails}`);

            this.nextMedia();
        },

        onClickNext(clicks) {
            clearTimeout(this.timer);

            switch (clicks) {
                case 1:
                    this.nextMedia(1);
                    break;
                case 2:
                    this.nextMedia(5);
                    break;
                case 3:
                    this.nextMedia(10);
                    break;
                default:
                    this.nextMedia(1);
            }
        },

        onClickPrevious(clicks) {
            clearTimeout(this.timer);

            switch (clicks) {
                case 1:
                    this.nextMedia(-1);
                    break;
                case 2:
                    this.nextMedia(-5);
                    break;
                case 3:
                    this.nextMedia(-10);
                    break;
                default:
                    this.nextMedia(-1);
            }
        },
    },
});
</script>

<style scoped>
#content-pane {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: black;
}

#media-box {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    width: 100%;
}

.media {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}

.fade {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.fade-in {
    opacity: 1 !important;
}
#progress {
    margin-top: 2px;
}

#info-box {
    position: absolute;
    bottom: 5px;
    left: 5px;

    z-index: 2;

    display: flex;
    flex-direction: column;
}

#version {
    position: absolute;
    top: 5px;
    right: 5px;

    height: 1.5em;
    width: 150px;
}
</style>
