/**
 * Queue follow first in first out
 */

class Queue {
    constructor() {
        this.collection = [];
    }

    add(itm) {
        this.collection.push(itm);
    }

    remove() {
        this.collection.shift();
    }

    front() {
        return this.isEmpty() ? this.collection[0] : null;
    }

    size() {
        return this.collection.length;
    }

    isEmpty() {
        return !this.collection.length;
    }
}

const q = new Queue();
q.add(1);
q.add(2);
q.add(3);
q.add(4);
q.remove();