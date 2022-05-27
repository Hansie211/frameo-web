<template>
    <div id="container">
        <q-spinner
            id="spinner"
            v-show="loading"
            color="primary"
            size="3em"
            :thickness="10"
        />
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
            loading: false,
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

            this.loading = false;

            this.video.currentTime = 0;
            this.video.play();
        },
        stop() {
            console.log(`Stop video display`);

            this.video.pause();
        },
        start(url) {
            console.log(`Start load video ${url}`);

            this.loading = true;

            this.source = url;
            this.video.load();
        },
    },
});
</script>

<style scoped>
#container {
    position: absolute;
    width: 100%;
    height: 100%;
}

#spinner {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
}

#video {
    height: 100%;
    width: 100%;
    object-fit: contain;
}
</style>
