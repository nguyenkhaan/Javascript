const input = require('prompt-sync')(); 
let [xa,ya] = input('Nhap toa do diem A: ').split(' ').map(x=>parseFloat(x.trim())); 
let [xb,yb] = input('Nhap toa do diem B: ').split(' ').map(x=>parseFloat(x.trim())); 
let long = Math.sqrt((xa-xb)**2 + (ya-yb)**2); 
console.log(long.toFixed(3)); 