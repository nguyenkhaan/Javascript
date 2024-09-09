const prompt = require('prompt-sync')(); 
const start = 1, end = 3; 
console.log('1. Bua - 2. Keo - 3. Bao'); 
let x = prompt('Nhap lua chon cua ban: '); 
    [x] = x.split().map(item=>parseInt(item.trim())); 
let y = Math.floor(Math.random() * (end - start + 1)) + start; 
if (x == y) console.log('Hoa'); 
else 
{
    if ((x == 1 && y == 3) || (x == 2 && y == 1) || (x == 3 && y == 2))
        console.log('May thang'); 
    else console.log('Nguoi thang');
}