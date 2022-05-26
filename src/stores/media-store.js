import { defineStore } from "pinia";

import media from "src/data/media.json";

export const useMediaStore = defineStore("MediaStore", {
    state: () => {
        return {
            media: media,
            currentIndex: -1,
        };
    },
    getters: {},
    actions: {
        addItems(items) {
            items.forEach((item) => {
                const idx = this.media.findIndex((m) => m.id === item.id);
                if (idx >= 0) {
                    this.media[idx].url = item.url;
                    return;
                }

                this.media.push(item);
                if (this.media.length === 1) this.currentIndex = 0;
            });
        },
        removeItems(ids) {
            ids.forEach((id) => {
                const idx = this.media.findIndex((m) => m.id === id);
                if (idx < 0) return;

                if (idx <= this.currentIndex) {
                    this.currentIndex--;
                    if (this.currentIndex < 0) this.nextIndex();
                }

                this.media.splice(idx, 1);
            });
        },
        peekNext() {
            return this.media.length == 0
                ? -1
                : (this.currentIndex + 1) % this.media.length;
        },
        nextIndex() {
            this.currentIndex = this.peekNext();
        },
    },
});
