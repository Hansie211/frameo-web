<template>
    <q-page class="flex flex-center">
        <div id="content-pane">
            <div id="media-box">
                <div class="media">
                    <image-display
                        :class="{
                            fade: true,
                            'fade-in': displayImage,
                        }"
                        ref="imageDisplay"
                        @load="onMediaLoad"
                    />
                    <video-display
                        :class="{
                            fade: true,
                            'fade-in': !displayImage,
                        }"
                        ref="videoDisplay"
                        @load="onMediaLoad"
                    />
                    <div id="date">{{ currentDate }}</div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
import ImageDisplay from "src/components/ImageDisplay.vue";
import VideoDisplay from "src/components/VideoDisplay.vue";
import { useMediaStore } from "src/stores/media-store";
import { defineComponent } from "vue";

export default defineComponent({
    components: { ImageDisplay, VideoDisplay },
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
        currentDate() {
            const media = this.currentMedia;
            if (media === undefined) return undefined;

            const options = {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            };
            const date = new Date(media.date);
            const string = date.toLocaleDateString("nl-NL", options).toString();
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
    },
    mounted() {
        this.mounted = true;
    },
    watch: {
        media: {
            handler(nVal) {},
            deep: true,
        },
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

            //immediate: true,
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
    height: 1.5em;
    width: 200px;
    position: absolute;
    bottom: 5px;
    left: 5px;
    background-color: gray;
    border: 2px solid purple;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
}
</style>
