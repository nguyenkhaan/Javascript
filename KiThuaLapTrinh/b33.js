//Viet chuong trinh xuat ra 4 lua chon de nguoi dung nhap 
const prompt = require('prompt-sync')(); 
let input = prompt('Nhap hai so: '); 
let [a,b] = input.split(' ').map(x=>Number(x.trim())); 
console.log('1. Phep cong'); 
console.log('2. Phep tru'); 
console.log('3. Phep nhan '); 
console.log('4. Phep chia'); 
console.log('Nhap lua chon cua ban: '); 
input = prompt(); 
let selection = Number(input); 
switch (selection) 
{
    case 1: console.log(a+b); break; 
    case 2: console.log(a-b); break; 
    case 3: console.log(a*b); break; 
    default: console.log(a/b); break; 
}; 