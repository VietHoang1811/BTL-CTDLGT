const LinkedList = require('./LinkedList');

class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }

    hash(mssv) {
        return mssv % this.size;
    }

    add(student) {
        const index = this.hash(student.mssv);
        if (!this.table[index]) {
            this.table[index] = new LinkedList();
        }
        this.table[index].add(student);
    }

    find(mssv) {
        const index = this.hash(mssv);
        if (this.table[index]) {
            return this.table[index].find(mssv);
        }
        return null;
    }
}

module.exports = HashTable;
