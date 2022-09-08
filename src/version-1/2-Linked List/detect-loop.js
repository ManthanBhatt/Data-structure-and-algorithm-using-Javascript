/* Linked list Node */
let head = null;
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

function push(new_data) {
    var new_node = new Node(new_data);
    new_node.next = head;
    head = new_node;
}

push(20);
push(4);
push(15);
push(10);

/* Create loop for testing */
head.next.next.next.next = head;

const detectLoop = (head) => {
    const connectedNode = {};
    let loop = false;
    while (head) {
        if (connectedNode[head.data]) {
            loop = true;
            break;
        }

        connectedNode[head.data] = true;
        head = head.next;
    }

    return loop;
}

console.log(head);
console.log(detectLoop(head));