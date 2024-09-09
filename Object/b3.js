//Tao mot doi tuong person, 
// let person = new Object(1,2,3,4); //Tao mot doi tuong chi co tham so dau tien, cha co tac dung gi may \
//Tao mot doi tuong co ten student voi thuoc tinh: name, age, grade 
//In ra key va value cua tung thuoc tinh (su dung object construct)
function Student(name,age,grade) {
    this.name = name; 
    this.age = age; 
    this.grade = grade; 
}
console.log('Nhap thong tin hoc sinh'); 
const readLine = require('prompt-sync')(); 
let name = readLine(); 
let age = Number(readLine()); 
let grade = readLine(); 
const a = new Student(name,age,grade); 
console.log(Object.keys(a)); 
console.log(Object.values(a)); 
Student.prototype.major = ''; 
a.major = 'Ki thuat phan mem'; 
console.log(a.major); 
delete a.age; 
console.log(a); 
//Lap qua cac key cua doi tuong tudent 
for (let key in a) console.log(`${key}  ${a[key]}`) 
    //Su dung for - in de duyet qua key cua cac doi tuong 