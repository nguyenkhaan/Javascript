function addStudent(fixed = 'Chua ro',...args) 
{
    console.log('Danh sach hoc sinh: '); 
    for (let i of args) console.log(i); 
}
const readLine = require('prompt-sync')(); 
var myClass = readLine(); 
var a = readLine().split(' '); 
addStudent(undefined,a); 