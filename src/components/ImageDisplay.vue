<template>
    <div id="container">
        <div class="wrapper" id="wrapper-main">
            <img id="image-main" ref="image-main" :src="currentSource" />
        </div>
        <div
            :class="{
                wrapper: true,
                'fade-image': true,
                'fade-image-in': fadeIn,
            }"
            id="wrapper-load"
        >
            <img id="image-load" @load="onImageLoad" :src="nextSource" />
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "ImageDisplay",
    emits: ["load"],
    props: {
        source: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            currentSource: "",
            nextSource: "",
            fadeIn: false,
        };
    },
    methods: {
        onImageLoad() {
            this.fadeIn = true;
            setTimeout(() => {
                this.$emit("load");
                this.currentSource = this.nextSource;
                this.fadeIn = false;
            }, 2000);
        },
        stop() {
            // blank
        },
    },
    watch: {
        source: {
            immediate: true,
            handler(nVal) {
                this.nextSource = nVal;
            },
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

.wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
}

#wrapper-load {
    opacity: 0;
    z-index: -1;
}

img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
}

.fade-image {
    transition: opacity 1s ease-out;
}

.fade-image-in {
    opacity: 1 !important;
    z-index: 1 !important;
}
</style>
