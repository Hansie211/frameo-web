<template>
    <div id="date">
        {{ text }}
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "DateBlock",
    props: {
        value: {
            type: String,
            default: null,
        },
    },
    computed: {
        text() {
            if (this.value === null) return null;

            const options = {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            };

            const date = new Date(this.value);
            const string = date.toLocaleDateString("nl-NL", options).toString();

            return string.charAt(0).toUpperCase() + string.slice(1);
        },
    },
});
</script>

<style scoped>
#date {
    background-color: gray;
    border: 2px solid purple;

    border-radius: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 2;
}
</style>
