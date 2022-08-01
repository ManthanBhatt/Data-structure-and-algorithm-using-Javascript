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
     * Pop method will remove the last element from the linked list
     * @returns void
     */
    pop() {
        if (!this.head) return;

        let current = this.head;
        while (current.next) {
            if (current.next && !current.next.next)
                current.next = current.next.next;
            else
                current = current.next;
        }
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

    /**
     * Shift method will remove element from the start of the linked list
     * @returns void
     */
    shift() {
        if (!this.head) return;
        this.head = this.head.next;
    }

    /**
     * Find method will return boolean on the basis of the data is found in the linked list or not
     * @param {*} data 
     * @returns boolean
     */
    find(data) {
        if (!this.head) return;

        let found = false;
        let current = this.head;
        while (current) {
            if (current.data == data) {
                found = true;
                break;
            }
            current = current.next
        }

        return found;
    }

    /**
     * Remove method will remove particular data from the linked list.
     * @param {*} data 
     * @returns void
     */
    remove(data) {
        if (!this.head) return;

        let current = this.head;
        while (current) {
            if (current.next && current.next.data == data) {
                current.next = current.next.next;
                break;
            } else {
                current = current.next
            }
        }
    }
}