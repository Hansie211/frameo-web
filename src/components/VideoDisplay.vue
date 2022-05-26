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
    data() {
        return {
            source: null,
        };
    },
    computed: {
        video() {
            return this.$refs.video;
        },
    },
    methods: {
        onVideoLoad() {
            this.$emit("load");

            this.video.currentTime = 0;
            this.video.play();
        },
        stop() {
            console.log(`Stop video display`);

            this.video.pause();
        },
        start(url) {
            console.log(`Start load video ${url}`);

            this.source = url;
            this.video.load();
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
