const input = require('prompt-sync')(); 
let s = Number(input('Nhap dien tich hinh cau: ')); 
const p = 3.14159; 
let r = Math.sqrt(s / (4*p)); 
let v = (4/3) * p * (r**2); 
console.log('The tich: ',v); 