const input = require('prompt-sync')() 
let [m,n] = input('Nhap hai canh cua hinh chu nhat: ').split(' ').map(x=>parseFloat(x.trim())); 
let s = m * n; 
console.log(s); 