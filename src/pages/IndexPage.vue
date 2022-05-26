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
                        :source="imageSource"
                        @load="onMediaLoad"
                    />
                    <video-display
                        :class="{
                            fade: true,
                            'fade-in': !displayImage,
                        }"
                        ref="videoDisplay"
                        :source="videoSource"
                        @load="onMediaLoad"
                    />
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
            imageSource: "",
            videoSource: "",
            displayImage: true,
            timer: 0, // setInterval(() => this.mediaStore.nextIndex(), 3000),
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
            return this.mediaStore.currentIndex;
        },
        currentMedia() {
            return this.media[this.currentIndex];
        },
    },
    watch: {
        media: {
            handler(nVal) {},
            deep: true,
        },
        currentIndex: {
            handler(nVal) {
                if (nVal < 0) return;

                const media = this.media[nVal];
                if (media === undefined) return;

                this.$refs.imageDisplay?.stop();
                this.$refs.videoDisplay?.stop();

                this.displayImage = !media.is_video;

                console.log(media);

                if (this.displayImage) {
                    this.imageSource = media.url;
                } else {
                    this.videoSource = media.url;
                    this.$refs.videoDisplay?.start();
                }
            },

            immediate: true,
        },
    },
    methods: {
        nextMedia() {
            this.mediaStore.nextIndex();
        },
        onMediaLoad() {
            // const nextIdx = this.mediaStore.peekNext();

            // if (this.currentMedia.is_video == this.media[nextIdx].is_video) {
            this.timer = setTimeout(() => this.nextMedia(), 4000);
            //     return;
            // }
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
    width: 1500px;
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
    transition: opacity 1s ease-in-out;
}

.fade-in {
    opacity: 1 !important;
}
</style>
