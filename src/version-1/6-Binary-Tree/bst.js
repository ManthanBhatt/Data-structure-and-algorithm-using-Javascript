/**
 * Binary search tree
 * It is based on parent and child concept where every parent node had only 2 child left and right
 * The first node of tree is called root.
 * 
 * BST are order tree
 * left subtree is less than or equal to the parent node.
 * right subtree is greater than or equal to the parent node.
 */

class TreeNode {
    constructor(val, left = null, right = null) {
        this.data = val;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;
        if (!node) {
            this.root = new TreeNode(data);
            return
        }

        const searchTree = (node) => {
            if (data < node.data) {
                if (node.left === null) {
                    node.left = new TreeNode(data);
                    return;
                } else if (node.left !== null) {
                    return searchTree(node.left);
                }
            } else if (data > node.data) {
                if (node.right === null) {
                    node.right = new TreeNode(data);
                    return;
                } else if (node.right !== null) {
                    return searchTree(node.right);
                }
            } else {
                return null;
            }
        }

        return searchTree(node);
    }

    remove(data) {
        const node = this.root;
        const removeNode = (node, data) => {
            if (!node) return;

            if (data == node.data) {
                if (node.left == null && node.right == null) {
                    return null;
                }

                if (node.left === null) {
                    return node.right;
                }

                if (node.right === null) {
                    return node.left;
                }

                let tempNode = node.right;
                while (tempNode.left) {
                    tempNode = tempNode.left;
                }

                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(node, data);
    }

    findMin() {
        let current = this.root;

        while (current.left) {
            current = current.left;
        }

        return current.data
    }

    findMax() {
        let current = this.root;

        while (current.right) {
            current = current.right;
        }

        return current.data;
    }

    isPresent(data) {
        let current = this.root;
        let found = false;
        while (current) {
            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            } else if (data === current.data) {
                found = true;
                break;
            }
        }

        return found;
    }

    findMinHeight(node = this.root) {
        if (!node) return -1;

        const left = this.findMinHeight(node.left);
        const right = this.findMinHeight(node.right);
        console.log(left, right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    findMaxHeight(node = this.root) {
        if (!node) return -1;

        const left = this.findMaxHeight(node.left);
        const right = this.findMaxHeight(node.right);
        console.log(left, right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
    }

    //Implemented logic for short circuit evaluation 
    // start from the most left and end on the most right
    inOrder() {
        if (!this.root) return;
        const result = [];
        const traverse = (node) => {
            node.left && traverse(node.left);
            result.push(node.data);
            node.right && traverse(node.right)
        }
        traverse(this.root);
        return result;
    }

    //start from the root and add data then go to left like forward slash.
    preOrder() {
        if (!this.root) return;
        const result = [];
        const traverse = (node) => {
            result.push(node.data);
            node.left && traverse(node.left);
            node.right && traverse(node.right);
        }

        traverse(this.root);
        return result;
    }

    //Goto all the child nodes then slowly go up towards root
    postOrder() {
        if (!this.root) return;

        const result = [];
        const traverse = (node) => {
            node.left && traverse(node.left);
            node.right && traverse(node.right);
            // console.log(node);
            result.push(node.data);
        }
        traverse(this.root);
        return result;
    }

    //start from root then add all the child and move below
    // this is basically breath first search
    levelOrder() {
        let result = [];
        let Q = [];
        if (this.root != null) {
            Q.push(this.root);
            while (Q.length > 0) {
                let node = Q.shift();
                result.push(node.data);
                if (node.left != null) {
                    Q.push(node.left);
                };
                if (node.right != null) {
                    Q.push(node.right);
                };
            };
            return result;
        } else {
            return null;
        };
    }

    treePath() {
        if (!this.root) return;
        const result = [];
        const dfs = (node, path) => {
            if (!node) return;
            if (node.left === null && node.right === null) {
                path += node.data;
                result.push(path);
                return;
            }

            dfs(node.left, path + node.data + '->');
            dfs(node.right, path + node.data + '->');
        }

        dfs(this.root, "");
        return result
    }

    findPathBetweenTwoPoint(node1, node2) {
        if (!this.root) return;
        const node1PathFromRoot = [];
        const node2PathFromRoot = [];

        const dfs = (node, data, path) => {
            if (!node) {
                path = [];
                return;
            }
            if (data < node.data) {
                path.push(node.data);
                return dfs(node.left, data, path);
            } else if (data > node.data) {
                path.push(node.data);
                return dfs(node.right, data, path);
            } else if (data === node.data) {
                path.push(data);
                return;
            } else {
                path = [];
                return;
            }
        }

        dfs(this.root, node1, node1PathFromRoot);
        console.log(node1PathFromRoot);
        dfs(this.root, node2, node2PathFromRoot);
        console.log(node2PathFromRoot);

        const result = [];

        for (let i = node1PathFromRoot.length - 1; i >= 0; i--) {
            const ind = node2PathFromRoot.findIndex(x => x == node1PathFromRoot[i]);
            if (ind === -1) {
                result.push(node1PathFromRoot[i]);
            } else if (ind > -1) {
                result.push(node1PathFromRoot[i]);
                break;
            }
        }

        for (let i = 0; i < node2PathFromRoot.length; i++) {
            const ind = node1PathFromRoot.findIndex(x => x == node2PathFromRoot[i]);
            if (ind === -1) {
                result.push(node2PathFromRoot[i]);
            }
        }
    }

    invert() {
        if (!this.root) return;
        let Q = [];
        Q.push(this.root);
        while (Q.length) {
            let node = Q.shift();
            if (node.left && node.right) {
                [node.left, node.right] = [node.right, node.left];
            }

            if (node.left != null) {
                Q.push(node.left);
            };
            if (node.right != null) {
                Q.push(node.right);
            };
        };
        return this.root;
    }


}

const bst = new BinarySearchTree();
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);
bst.add(10);
console.log(bst.root);
console.log(bst.inOrder())
console.log(bst.preOrder());
console.log(bst.postOrder());
console.log(bst.levelOrder());
console.log(bst.treePath());
console.log(bst.findPathBetweenTwoPoint(7, 20));
console.log(bst.root);
console.log(bst.invert());
console.log(bst.treePath());