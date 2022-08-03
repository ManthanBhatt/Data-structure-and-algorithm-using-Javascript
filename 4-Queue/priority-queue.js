/**
 * Priority queue is same as simple queue but item is added based on priority
 */


class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    isEmpty() {
        return !this.collection.length;
    }

    add(itm) {
        if (this.isEmpty()) {
            this.collection.push(itm);
            return;
        }

        let added = false;
        for (let i = 0; i < this.collection.length; i++) {
            if (itm[1] < this.collection[i][1]) {
                this.collection.splice(i, 0, itm);
                added = true;
                break;
            }
        }

        if (!added) {
            this.collection.push(itm);
        }
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
}

const pq = new PriorityQueue();
pq.add(['Beau Carnes', 2]);
pq.add(['Quincy Larson', 3]);
pq.add(['Ewa Mitulska-Wójcik', 1])
pq.add(['Briana Swift', 2])