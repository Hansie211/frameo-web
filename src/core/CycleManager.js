import EventEmitter from "./Events";

export default class CycleManager extends EventEmitter {
    #index;
    #max;

    constructor() {
        super();

        this.#index = -1;
        this.#max = 0;

        this.peekIndex = this.peekIndex.bind(this);
        this.popIndex = this.popIndex.bind(this);

        this.getIndex = this.getIndex.bind(this);
        this.setIndex = this.setIndex.bind(this);

        this.getMax = this.getMax.bind(this);
        this.setMax = this.setMax.bind(this);

        this.removeIndex = this.removeIndex.bind(this);
        this.addOne = this.addOne.bind(this);
    }

    peekIndex(count = 1) {
        if (typeof count !== "number") throw new Error("Cannot read count as number");
        if (this.getMax() === 0) return -1;

        return (this.getIndex() + count + this.getMax()) % this.getMax();
    }

    popIndex(count = 1) {
        this.setIndex(this.peekIndex(count));
    }

    getIndex() {
        return this.#index;
    }

    setIndex(value) {
        if (value === this.#index) return;
        const oldValue = this.#index;

        this.#index = value;

        this.trigger("indexchanged", value, oldValue);
    }

    getMax() {
        return this.#max;
    }

    setMax(value) {
        this.#max = value;
    }

    removeIndex(index) {
        if (this.#index >= index) {
            this.setIndex(this.#index - 1);
        }
    }

    addOne() {
        this.setMax(this.#max + 1);
        if (this.getMax() === 1) this.setIndex(0);
    }
}
