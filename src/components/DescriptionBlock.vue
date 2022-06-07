<template>
    <div id="description" v-if="value != null && value !== ''">
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
    background-color: rgba(0, 0, 0, 0.6);

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 0.9em;
    font-weight: bold;
    color: white;
    opacity: 0.5;

    padding: 1px 5px;
    max-width: 400px;
}
</style>
