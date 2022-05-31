import { defineStore } from "pinia";

export const useMediaStore = defineStore("MediaStore", {
    state: () => {
        return {
            mediaItems: [],
        };
    },
    getters: {
        count() {
            return this.mediaItems.length;
        },
    },
    actions: {
        updateItem(storeItem, item) {
            storeItem.url = item.url;
        },
        addItem(item) {
            if (!item) {
                console.error(`Error: item is null`);
                return;
            }

            if (!item.id) {
                console.error(`Error: item.id is null (${JSON.stringify(item)})`);
                return;
            }

            if (!item.url) {
                console.error(`Error: item.id url null (${JSON.stringify(item)})`);
                return;
            }

            const idx = this.mediaItems.findIndex((m) => m.id === item.id);
            if (idx >= 0) {
                this.updateItem(this.mediaItems[idx], item);
                return false;
            }

            this.mediaItems.push(item);
            return true;
        },
        addItems(items) {
            items.forEach((item) => {
                this.addItem(item);
            });
        },
        removeItem(index) {
            this.mediaItems.splice(index, 1);
        },
        removeItems(ids) {
            ids.forEach((id) => {
                const idx = this.mediaItems.findIndex((m) => m.id === id);
                if (idx < 0) return false;

                this.removeItem(idx);
            });
        },
    },
});
