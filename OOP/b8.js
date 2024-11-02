//Tao mot class Student. Bien private de luu mssv, cout de demso luong sinh vien dag ki 
const readLine = require('prompt-sync')(); 
class Student 
{
    static #count = 0; 
    constructor(id) 
    {
        this.id = id; 
        Student.#count++; 
    }
    set setID(pass) 
    {
        this.id = pass; 
    }
    get getID() {
        return this.id; 
    }
    checkID(id) 
    {
        if (id == this.id) {
            console.log('Mat khau dung'); 
        } else console.log('Mat khau sai'); 
    }
    static getCount()
    {
        return Student.#count; 
    }
}
const a = [0]; 
const succ = 'Thanh cong...'; 
function addStudent() 
{
    let newStudent = new Student(); 
    a.push(newStudent); 
    console.log(succ); 
}
function setPassWord() 
{
    const index = Number(readLine('Nhap thu tu')); 
    const password = readLine('Nhap di: '); 
    a[index].setID = password;  
    console.log(succ); 
}
function CheckID() 
{
    const index = Number(readLine('Nhap thu tu')); 
    const password = readLine('Nhap di: '); 
    a[index].checkID(password); 
}
function Count() 
{
    return Student.getCount(); 
}
var choice = 1; 
while (choice!=5) 
{
    console.log('1. Them hoc sinh: '); 
    console.log('2. Cap nhat mat khau '); 
    console.log('3. Kiem tra mat khau '); 
    console.log('4. Tong so luong dang ki: '); 
    console.log('5. Thoat'); 
    choice = Number(readLine('Nhap lua chon: ')); 
    if (choice == 1) addStudent(); 
    else if (choice == 2) setPassWord(); 
    else if (choice == 3) CheckID(); 
    else if (choice == 4) console.log(Count()); 
}