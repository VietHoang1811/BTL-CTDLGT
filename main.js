const prompt = require('prompt-sync')();
const StudentManager = require('./StudentManager.js');

function main() {
    const manager = new StudentManager('data.json');

    while (true) {
        console.log("\nChọn yêu cầu:");
        console.log("1. list - Liệt kê danh sách sinh viên");
        console.log("2. find <mssv> - Tìm sinh viên theo MSSV");
        console.log("3. modify <mssv> <new_cpa> - Cập nhật CPA của sinh viên");
        console.log("4. findtop <n> - Tìm n sinh viên có CPA cao nhất");
        console.log("5. findbottom <n> - Tìm n sinh viên có CPA thấp nhất");
        console.log("6. findcanhcao - Tìm sinh viên bị cảnh cáo");
        console.log("9. exit");

        const action = prompt("Nhập lệnh: ").trim();
        const args = action.split(" ");

        switch (args[0]) {
            case "list":
                manager.listStudents();
                break;
            case "find":
                const student = manager.findStudent(args[1]);
                console.log(student ? `${student.mssv} ${student.name} - CPA: ${student.cpa}` : "Không tìm thấy sinh viên.");
                break;
            case "modify":
                manager.modifyCpa(args[1], parseFloat(args[2]));
                break;
            case "findtop":
                manager.findTopN(parseInt(args[1]));
                break;
            case "findbottom":
                manager.findBottomN(parseInt(args[1]));
                break;
            case "findcanhcao":
                manager.findCanhCao();
                break;
            case "exit":
                console.log("Hẹn gặp lại!");
                return;
            default:
                console.log("Lệnh không hợp lệ.");
        }
    }
}

main();
