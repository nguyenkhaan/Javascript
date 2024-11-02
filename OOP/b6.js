//Viet 1 chuong trinh tao constructor Person: name, age, gender 
//Tao constructor Student ke thua gom ID, gpa va dia chi 
//Viet chuong trinh cho phep nhap so luong sinh vien 
//Thuc hien chuc nang tim kiem theo GPA 
//Thuc hien tinh diem tong cong cua toan bo sinh vien 
function Person(name,age,gender) 
{
    this.name = name; 
    this.age = age; 
    this.gender = gender; 
}
function Student(name,age,gender,ID,gpa) 
{
    Person.call(this,name,age,gender); 
    this.ID = ID; 
    this.gpa = gpa; 
}
Student.prototype = Object.create(Person.prototype); 
Student.prototype.constructor = Student; 
const a = []; 
const readLine = require('prompt-sync')(); 
const n = Number(readLine()); 
for (let i = 0; i<n; ++i) 
{
    let name = readLine(); 
    let age = Number(readLine()); 
    let gender = readLine(); 
    let ID = readLine(); 
    let gpa = Number(readLine()); 
    a.push(new Student(name,age,gender,ID,gpa)); 
}