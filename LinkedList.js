const Node = require('./Node.js');

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(student) {
        const newNode = new Node(student);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    find(mssv) {
        let current = this.head;
        while (current) {
            if (current.student.mssv === mssv) {
                return current.student;
            }
            current = current.next;
        }
        return null;
    }
}

module.exports = LinkedList;
