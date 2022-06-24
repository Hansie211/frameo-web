<template>
    <div id="block">
        <click-box class="clickbox" id="previous" @click="onClickPrevious" />
        <click-box class="clickbox" id="next" @click="onClickNext" />
        <div id="swipebox" v-touch-swipe.mouse.right.left="handleSwipe"></div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import ClickBox from "./ClickBox.vue";

export default defineComponent({
    name: "UserActions",
    emits: ["next", "previous"],
    components: { ClickBox },
    methods: {
        onClickPrevious(clicks) {
            this.$emit("previous", clicks);
        },
        onClickNext(clicks) {
            this.$emit("next", clicks);
        },
        handleSwipe(e) {
            if (e.direction === "left") {
                this.$emit("next", 1);
                return;
            }
            if (e.direction === "right") {
                this.$emit("previous", 1);
                return;
            }

            //console.log(e.direction);
        },
    },
});
</script>

<style scoped>
#block {
    position: absolute;
    width: 100%;
    height: 100%;

    z-index: 5;
    opacity: 0;
}

.clickbox {
    position: absolute;
    height: 100%;
    width: 15%;
    top: 0;
}

#swipebox {
    height: 100%;
    width: 65%;

    margin-left: auto;
    margin-right: auto;
}

#previous {
    left: 0;
}

#next {
    right: 0;
}
</style>
