//Bai toan mang xoay vong 
const input = require('prompt-sync')(); 
let n = Number(input()); 
let a = input().split(' ').map(x=>Number(x.trim())); 
console.log('Nhap so lan xoay vong: '); 
let k = Number(input()); 
for (let i = 0; i<k; i++) 
{
    let last = a.pop(); 
    a.unshift(last); 
}
console.log(a); 