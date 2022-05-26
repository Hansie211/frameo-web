<template>
    <div id="container">
        <video
            id="video"
            ref="video"
            muted
            autoplay
            loop
            @loadeddata="onVideoLoad"
        >
            <source :src="source" type="video/mp4" />
        </video>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "VideoDisplay",
    emits: ["load"],
    props: {
        source: {
            type: String,
            default: null,
        },
    },
    data() {
        return {};
    },
    methods: {
        onVideoLoad() {
            this.$emit("load");

            this.$refs.video.currentTime = 0;
            this.$refs.video.play();
        },
        stop() {
            this.$refs.video.pause();
        },
        start() {
            const video = this.$refs.video;

            if (video.readyState >= 3) {
                this.onVideoLoad();
            } else {
                video.load();
            }
        },
    },
    watch: {
        source() {},
    },
});
</script>

<style scoped>
#container {
    position: absolute;
    width: 100%;
    height: 100%;
}

#video {
    height: 100%;
    width: 100%;
    object-fit: contain;
}
</style>
