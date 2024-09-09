const prompt = require('prompt-sync')(); 
let input = prompt('Nhap tam I: '); 
let [xi,yi] = input.split(' ').map(item=>parseFloat(item.trim())); 
let r = prompt('Nhap ban kinh: '); 
[r] = r.split().map(item=>parseFloat(item.trim())); 

input = prompt('Nhap toa do diem M: '); 
let [x,y] = input.split(' ').map(item=>parseFloat(item.trim())); 
var long = Math.sqrt((xi-x)**2+(yi-y)**2); 
if (long<=r) console.log('Nam trong'); 
else console.log('Nam ngoai'); 