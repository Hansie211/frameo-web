import { defineStore } from "pinia";

import media from "src/data/media.json";

export const useMediaStore = defineStore("MediaStore", {
    state: () => {
        return {
            media: media,
            currentIndex: 0,
        };
    },
    getters: {
        // {
        //     "id": "0000-FAKE-UUID-0004",
        //     "url": "https://filesamples.com/samples/video/mp4/sample_1280x720.mp4",
        //     "date": "2022-05-22 12:04:00",
        //     "is_video": true
        // },
    },
    actions: {
        addItems(items) {
            items.forEach((item) => {
                const idx = this.media.findIndex((m) => m.id === item.id);
                if (idx < 0) {
                    this.media.push(item);
                    return;
                }

                if (this.media.length == 1) this.currentIndex = 0;

                this.media[idx].url = item.url;
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
