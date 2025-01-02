class Student {
    constructor(mssv, name, cpa, canhcao) {
        this.mssv = parseInt(mssv, 10);
        this.name = name.trim();
        this.cpa = parseFloat(cpa);
        this.canhcao = parseInt(canhcao, 10);
    }
}

module.exports = Student;
