<template>
    <div id="progress">
        {{ progress }}
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "ProgressBlock",
    props: {
        current: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        progress() {
            return `${this.current + 1} / ${this.max}`;
        },
    },
});
</script>

<style scoped>
#progress {
    background-color: white;

    text-align: center;

    height: 1.2em;
    line-height: 1.2em;

    opacity: 0.3;
}
</style>
