export default class EventEmitter {
    #handlers;

    constructor() {
        this.#handlers = new Map();
    }

    on(eventName, handler) {
        if (!this.#handlers.has(eventName)) {
            this.#handlers.set(eventName, [handler]);
        } else {
            this.#handlers.get(eventName).push(handler);
        }
    }

    trigger(eventName, ...args) {
        for (const handler of this.#handlers.get(eventName) || [])
            handler(...args);
    }
}
