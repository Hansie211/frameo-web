<template>
    <div id="description" v-if="value != null && value !== ''">
        <div id="background"></div>
        {{ value }}
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "DescriptionBlock",
    props: {
        value: {
            type: String,
            default: null,
        },
    },
});
</script>

<style scoped>
#description {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.2em;
    font-weight: bold;
    color: white;

    padding: 2px 10px;
    max-width: 400px;

    align-self: flex-end;
}

#background {
    position: absolute;
    height: 100%;
    width: 100%;

    background-color: black;
    opacity: 0.6;

    z-index: -1;
}
</style>
