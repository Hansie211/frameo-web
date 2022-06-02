<template>
    <div id="box" @click="onClick"></div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "ClickBox",
    emits: ["click"],
    props: {
        timeout: {
            type: Number,
            default: 500,
        },
        max: {
            type: Number,
            default: 3,
        },
    },
    data() {
        return {
            clicks: 0,
            timer: 0,
        };
    },
    methods: {
        onClick() {
            console.log("CLICK");
            clearInterval(this.timer);

            this.clicks++;
            if (this.clicks >= this.max) {
                this.fire();
                return;
            }

            this.timer = setTimeout(this.fire, this.timeout);
        },

        fire() {
            console.log("FIRE");
            const clicks = this.clicks;
            this.clicks = 0;

            this.$emit("click", clicks);
        },
    },
});
</script>

<style scoped>
#box {
}
</style>
