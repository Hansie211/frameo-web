<template>
    <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { useMediaStore } from "src/stores/media-store";

import media from "src/data/media.json";

function initCallback(fnAdd, fnRemove) {
    window["MediaStore"] = {
        addItems: fnAdd,
        removeItems: fnRemove,
    };

    // fnAdd(media);
}

export default defineComponent({
    name: "App",
    created() {
        initCallback(this.fnAddItems, this.fnRemoveItems);
    },
    methods: {
        fnAddItems(items) {
            const mediaStore = useMediaStore();
            mediaStore.addItems(items);
        },
        fnRemoveItems(ids) {
            const mediaStore = useMediaStore();
            mediaStore.removeItems(ids);
        },
    },
});
</script>
