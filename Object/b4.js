//Viet 1 chuong trinh tao ra danh sach quan li cac hoc sinh
/**
 * 1. Thêm học sinh: MSSV,Ho ten, Tuoi, Lop
 * 2. Xóa học sinh: MSSV 
 * 3. Chỉnh sửa thông tin học sinh -> Hiện ra 1 bảng tùy chọn để nhập lại 
 */
const readLine = require('prompt-sync')(); 
var myList = []; 
var code = []; 
const input = function() {
    let a = readLine('Nhap MSSV: '); 
    let b = readLine('Nhap ten: '); 
    let c = readLine('Nhap tuoi: '); 
    let d = readLine('Nhap lop'); 
    return [a,b,c,d]
} //script scope 
function Student(MSSV,name,age,grade) 
{
    this.MSSV = MSSV; 
    this.name = name; 
    this.age = age; 
    this.grdade = grade;  
}
function addStudent() 
{
    let x = new Student(); 
    [x.MSSV,x.name,x.age,x.grdade] = input(); 
    myList.push(x); 
}
function searchStudent() {
    let k = readLine('Nhap MSSV: '); 
    let ok = false; 
    for (let x of myList) if (x.MSSV === k) {
        ok = true; 
        console.log(x); 
        break; 
    }
    if (!ok) console.log('No information...'); 
}
function editStudent() {
    
    let k = readLine('Nhap MSSV: '); 
    for (let i = 0; i<myList.length; ++i) if (myList[i].MSSV === k) {
        [myList[i].MSSV,myList[i].name,myList[i].age,myList[i].grade] = input(); 
        break; 
    }
}
console.log('1. Them hoc sinh'); 
console.log('2. Xoa hoc sinh'); 
console.log('3. Chinh sua hoc sinh '); 
console.log('4. Tim kiem hoc sinh'); 
