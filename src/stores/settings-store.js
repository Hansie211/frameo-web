import { defineStore } from "pinia";

import defaultSettings from "src/data/default-settings.json";

export const useSettingsStore = defineStore("SettingsStore", {
    state: () => {
        return defaultSettings;
    },
    actions: {},
});
