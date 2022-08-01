class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }

    /**
     * Push method will add data at the end of the linked list
     * @param {*} data 
     * @returns void
     */
    push(data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = new Node(data);
    }

    /**
     * Unshift method will add data at the start of the linked list
     * @param {*} data 
     * @returns void
     */
    unshift(data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
    }
}