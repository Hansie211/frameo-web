import data from "src/data/version.json";

class VersionManager {
    get MAJOR() {
        return this.#data.MAJOR;
    }

    get MINOR() {
        return this.#data.MINOR;
    }

    get RELEASE() {
        return this.#data.RELEASE;
    }

    #data;

    asString() {
        return `v${this.MAJOR}.${this.MINOR}.${this.RELEASE}`;
    }

    constructor() {
        this.#data = data;

        this.asString = this.asString.bind(this);
    }
}

const VERSION = new VersionManager();
export default VERSION;
