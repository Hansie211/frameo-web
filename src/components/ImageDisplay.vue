<template>
    <div id="container">
        <div
            id="backdrop"
            :style="{ backgroundImage: 'url(' + currentSource + ')' }"
        ></div>
        <img
            id="image-main"
            :src="currentSource"
            :class="{ fade: true, 'fade-out': doTransition }"
        />
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "ImageDisplay",
    emits: ["load"],
    data() {
        return {
            currentSource: "",
            nextSource: "",
            transitionSource: "",
            doTransition: false,
        };
    },
    methods: {
        onImageLoad() {
            this.$emit("load");

            this.transitionSource = this.nextSource;
            this.doTransition = true;
            setTimeout(this.onAfterEnter, 100);
        },
        onAfterEnter() {
            const oldSource = this.currentSource;
            this.currentSource = this.transitionSource;
            this.transitionSource = oldSource;

            this.doTransition = false;
        },
        stop() {
            console.log(`Stop image display`);
            this.currentSource = null;
        },
        start(url) {
            console.log(`Start load image ${url}`);

            const bufferImg = new Image();
            bufferImg.onload = this.onImageLoad;
            bufferImg.onerror = null; // TODO:

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

/*
.fade {
    transition: opacity 0.1s ease-out;
}

.fade-in {
    opacity: 1 !important;
    z-index: 1 !important;
}

.fade-out {
    opacity: 0 !important;
    z-index: -1 !important;
} */

#backdrop {
    position: absolute;

    --over-size: -20%;
    left: var(--over-size);
    top: var(--over-size);
    right: var(--over-size);
    bottom: var(--over-size);

    filter: blur(5px);

    z-index: 0;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}
</style>
