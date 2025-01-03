const Node = require('./Node.js');

class SearchTree {
    constructor() {
        this.root = null;
    }

    add(student) {
        const newNode = new Node(student);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.student.mssv < node.student.mssv) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    find(mssv) {
        return this.searchNode(this.root, mssv);
    }

    searchNode(node, mssv) {
        if (node === null) {
            return null;
        }

        if (mssv === node.student.mssv) {
            return node.student;
        } else if (mssv < node.student.mssv) {
            return this.searchNode(node.left, mssv);
        } else {
            return this.searchNode(node.right, mssv);
        }
    }
}

module.exports = SearchTree;
