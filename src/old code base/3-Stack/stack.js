/**
 * Stack follow last in first out
 */

class Stack {
    constructor() {
        this.length = 0;
        this.storage = {};
    }

    push(val) {
        this.storage[this.length] = val;
        this.length++;
    }

    pop() {
        if (this.length == 0) return;

        this.length--;
        delete this.storage[this.length];
    }

    find(val) {
        let ind = 0;
        let found = -1;
        while (ind <= this.length) {
            if (val == this.storage[ind]) {
                found = ind;
                break;
            }
            ind++;
        }

        return found;
    }
}

const s = new Stack();
s.push(1);
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.pop();
console.log(s.find(2));
console.log(s);