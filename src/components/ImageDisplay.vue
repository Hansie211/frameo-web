<template>
    <div id="container">
        <div id="backdrop" :style="{ backgroundImage: 'url(' + currentSource + ')' }" v-if="currentSource !== null"></div>
        <img id="image-main" :src="currentSource" v-if="currentSource !== null" />
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "ImageDisplay",
    emits: ["load", "error"],
    data() {
        return {
            currentSource: null,
            nextSource: "",
        };
    },
    methods: {
        onImageLoad() {
            this.$emit("load");

            this.currentSource = this.nextSource;
        },
        stop() {
            this.currentSource = null;
        },
        start(url) {
            console.log(`Start load image ${url}`);

            const bufferImg = new Image();
            bufferImg.onload = this.onImageLoad;
            bufferImg.onerror = (error) => {
                this.$emit("error", error);
            };

            bufferImg.src = this.nextSource = url;
        },
    },
});
</script>

<style scoped>
#container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

#image-main {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 1;
}

#backdrop {
    position: absolute;

    --over-size: -20%;
    left: var(--over-size);
    top: var(--over-size);
    right: var(--over-size);
    bottom: var(--over-size);

    filter: blur(10px);

    z-index: 0;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
</style>
