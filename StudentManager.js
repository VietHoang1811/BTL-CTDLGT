const fs = require('fs');
const Student = require('./Student.js');
const HashTable = require('./HashTable.js');

class StudentManager {
    constructor(filePath) {
        this.filePath = filePath;
        this.hashTable = new HashTable(100);
        this.students = this.loadStudents();
    }

    loadStudents() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf-8');
            const students = JSON.parse(data).map(student =>
                new Student(student.mssv, student.name, student.cpa, student.canhcao)
            );
            students.forEach(student => this.hashTable.add(student));
            return students;
        } catch (error) {
            console.error('Lỗi khi đọc tệp:', error.message);
            return [];
        }
    }

    saveStudents() {
        fs.writeFileSync(this.filePath, JSON.stringify(this.students, null, 2), 'utf-8');
        console.log('Dữ liệu đã được lưu!');
    }

    listStudents() {
        console.log('\n=== Danh sách sinh viên ===');
        this.students.forEach(student => {
            console.log(`${student.mssv} ${student.name} - CPA: ${student.cpa} - Mức cảnh cáo: ${student.canhcao}`);
        });
    }

    findStudent(mssv) {
        return this.hashTable.find(parseInt(mssv, 10));
    }

    modifyCpa(mssv, newCpa) {
        const student = this.findStudent(mssv);
        if (student) {
            student.cpa = newCpa;
            this.saveStudents();
            console.log(`CPA của sinh viên ${mssv} đã được cập nhật thành ${newCpa}`);
        } else {
            console.log('Không tìm thấy sinh viên.');
        }
    }
    
    // 4. Tìm n sinh viên có CPA cao nhất
    findTopN(n) {
        const sortedStudents = this.students.slice().sort((a, b) => b.cpa - a.cpa);
        console.log(`\n=== Top ${n} sinh viên có CPA cao nhất ===`);
        sortedStudents.slice(0, n).forEach(student => {
            console.log(`${student.mssv} ${student.name} - CPA: ${student.cpa}`);
        });
    }

    // 5. Tìm n sinh viên có CPA thấp nhất
    findBottomN(n) {
        const sortedStudents = this.students.slice().sort((a, b) => a.cpa - b.cpa);
        console.log(`\n=== Bottom ${n} sinh viên có CPA thấp nhất ===`);
        sortedStudents.slice(0, n).forEach(student => {
            console.log(`${student.mssv} ${student.name} - CPA: ${student.cpa}`);
        });
    }

    // 6. Tìm sinh viên bị cảnh cáo
    findCanhCao() {
        console.log("\n=== Danh sách sinh viên bị cảnh cáo ===");
        for (const student of this.students) {
            if (student.canhcao > 0) {
                console.log(`${student.mssv} ${student.name} - Mức cảnh cáo: ${student.canhcao}`);
            }
        }
    }
}

module.exports = StudentManager;
