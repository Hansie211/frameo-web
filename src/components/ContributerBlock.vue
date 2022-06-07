<template>
    <q-chip v-if="name != null && name !== ''" id="contributer">
        <q-avatar icon="account_circle" color="red" text-color="white" />

        {{ name }}</q-chip
    >
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "ContributerBlock",
    props: {
        name: {
            type: String,
            default: null,
        },
    },
});
</script>

<style scoped>
#contributer {
    align-self: flex-end;
}
</style>
