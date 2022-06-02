<template>
    <div id="block">
        <click-box class="clickbox" id="previous" @click="onClickPrevious" />
        <click-box class="clickbox" id="next" @click="onClickNext" />
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
    },
});
</script>

<style scoped>
#block {
    position: absolute;
    width: 100%;
    height: 100%;

    z-index: 5;
    opacity: 0.3;
}

.clickbox {
    height: 100%;
    background-color: green;
    opacity: 0.5;

    width: 150px;
}

#previous {
    float: left;
}

#next {
    float: right;
}
</style>
