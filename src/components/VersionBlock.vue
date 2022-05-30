<template>
    <div id="version">
        {{ value }}
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "VersionBlock",
    props: {
        value: {
            type: String,
            default: null,
        },
    },
});
</script>

<style scoped>
#version {
    background-color: rgba(255, 255, 255, 0.3);

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.5em;
    font-weight: bold;
    color: white;
    opacity: 0.5;
    z-index: 2;
}
</style>
