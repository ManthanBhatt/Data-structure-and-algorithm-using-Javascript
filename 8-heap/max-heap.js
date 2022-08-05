/**
 * Heaps
 * - Max Heap: in this the root node is the max number
 * - Min Heap: in this the root node is the min number
 * 
 * heap are represented in the form of array
 * below is the formula for the same
 * 
 * left child: i * 2;
 * right child: i * 2 + 1;
 * parent: i / 2;
 */

class MaxHeap {
    constructor() {
        this.head = [null];
    }

    add(data) {
        this.head.push(data);
        if (this.head.length > 2) {
            let idx = this.head.length - 1;
            while (this.head[idx] > this.head[Math.floor(idx / 2)]) {
                if (idx >= 1) {
                    [this.head[Math.floor(idx / 2)], this.head[idx]] = [this.head[idx], this.head[Math.floor(idx / 2)]];
                    if (Math.floor(idx / 2) > 1) {
                        idx = Math.floor(idx / 2);
                    } else {
                        break;
                    };
                };
            }
        }
    }

    // Remove the first element from the heap
    remove() {
        let smallest = this.head[1];
        if (this.head.length > 2) {
            this.head[1] = this.head[this.head.length - 1];
            this.head.splice(this.head.length - 1);
            if (this.head.length == 3) {
                if (this.head[1] < this.head[2]) {
                    [this.head[1], this.head[2]] = [this.head[2], this.head[1]];
                };
                return smallest;
            };
            let i = 1;
            let left = 2 * i;
            let right = 2 * i + 1;
            while (this.head[i] <= this.head[left] || this.head[i] <= this.head[right]) {
                if (this.head[left] > this.head[right]) {
                    [this.head[i], this.head[left]] = [this.head[left], this.head[i]];
                    i = 2 * i
                } else {
                    [this.head[i], this.head[right]] = [this.head[right], this.head[i]];
                    i = 2 * i + 1;
                };
                left = 2 * i;
                right = 2 * i + 1;
                if (this.head[left] == undefined || this.head[right] == undefined) {
                    break;
                };
            };
        } else if (this.head.length == 2) {
            this.head.splice(1, 1);
        } else {
            return null;
        };
        return smallest;
    }
}

const mh = new MaxHeap();
mh.add(1);
mh.add(2);
mh.add(5);
mh.add(9);
mh.add(10);
mh.add(6);
mh.add(12);
mh.remove();
mh