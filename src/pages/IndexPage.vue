<template>
    <q-page class="flex flex-center">
        <div id="content-pane">
            <div id="media-box">
                <div id="click-box"></div>
                <div class="media">
                    <image-display
                        :class="{
                            fade: true,
                            'fade-in': displayImage,
                        }"
                        ref="imageDisplay"
                        @load="onMediaLoad"
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
                    />
                </div>
                <DateBlock id="date" :value="currentMedia?.date" />
            </div>
        </div>
    </q-page>
</template>

<script>
import ImageDisplay from "src/components/ImageDisplay.vue";
import VideoDisplay from "src/components/VideoDisplay.vue";
import { useMediaStore } from "src/stores/media-store";
import { defineComponent } from "vue";
import DateBlock from "../components/DateBlock.vue";

export default defineComponent({
    components: { ImageDisplay, VideoDisplay, DateBlock },
    name: "IndexPage",
    data() {
        return {
            displayImage: true,
            mounted: false,
        };
    },
    computed: {
        mediaStore() {
            return useMediaStore();
        },
        media() {
            return this.mediaStore.media;
        },
        currentIndex() {
            return !this.mounted ? -1 : this.mediaStore.currentIndex;
        },
        currentMedia() {
            return this.media[this.currentIndex];
        },
    },
    mounted() {
        this.mounted = true;
    },
    watch: {
        currentIndex: {
            handler(nVal, oVal) {
                console.log(`Current Index changed from ${oVal} -> ${nVal}`);
                if (nVal < 0) return;

                const media = this.media[nVal];
                if (media === undefined) return;

                const oldMedia = this.media[oVal];
                const change =
                    oldMedia === undefined ||
                    oldMedia.is_video !== media.is_video;

                console.log(
                    `Media changed from ${JSON.stringify(
                        oldMedia
                    )} -> ${JSON.stringify(media)}`
                );

                if (change && media.is_video) this.$refs.videoDisplay?.stop();

                if (change && !media.is_video) this.$refs.imageDisplay?.stop();

                this.displayImage = !media.is_video;
                console.log(`Is video: ${media.is_video}`);

                if (this.displayImage) {
                    this.$refs.imageDisplay.start(media.url);
                } else {
                    this.$refs.videoDisplay?.start(media.url);
                }
            },
        },
    },
    methods: {
        nextMedia() {
            this.mediaStore.nextIndex();
        },
        onMediaLoad() {
            this.timer = setTimeout(() => this.nextMedia(), 4000);
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

#date {
    position: absolute;
    bottom: 5px;
    left: 5px;

    height: 1.5em;
    width: 200px;
}

#click-box {
    position: absolute;
    width: 100%;
    height: 100%;

    z-index: 5;
    background-color: #f0f;
    opacity: 0;
}
</style>
