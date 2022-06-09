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
            default: 250,
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
            clearInterval(this.timer);

            this.clicks++;
            if (this.clicks >= this.max) {
                this.fire();
                return;
            }

            this.timer = setTimeout(this.fire, this.timeout);
        },

        fire() {
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
