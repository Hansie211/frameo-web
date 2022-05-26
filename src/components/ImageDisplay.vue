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
        <!-- <img
            id="image-load"
            :src="transitionSource"
            :class="{ fade: true, 'fade-in': doTransition }"
        /> -->
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

img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

#image-load {
    opacity: 0;
    z-index: -1;
}

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
}

#backdrop {
    position: absolute;
    left: -5%;
    top: -5%;
    right: -5%;
    bottom: -5%;
    filter: blur(5px);
    z-index: -2;
}
</style>
