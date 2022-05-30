<template>
    <transition name="toast" :v-show="show">
        <div id="toast">
            {{ text }}
        </div>
    </transition>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Toast",
    props: {
        text: {
            type: String,
            default: null,
        },
        show: {
            type: Boolean,
            default: null,
        },
    },
    computed: {},
});
</script>

<style scoped>
#toast {
    position: absolute;
    left: 50%;
    margin-left: auto;
    margin-right: auto;

    background-color: gray;
    border: 2px solid purple;

    border-radius: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 2;
}
.toast-enter-from {
    bottom: -10px;
    opacity: 0.1;
}
.toast-enter-to {
    bottom: 40px;
    opacity: 1;
}

.toast-enter-active {
    transition: opacity, bottom 1s ease-out;
}
</style>
