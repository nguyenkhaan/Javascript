const prompt = require('prompt-sync')(); 
let input = prompt('Nhap ngay thang nam: '); 
let [d,m,y] = input.split(' ').map(item=>parseInt(item.trim())); 
let dayOfWeek = Math.trunc((d + y + y/4 - y/100 + y/400 + (31*m)/12) % 7); 
//Vẫn thực hiện với số thực được ?? 
switch (dayOfWeek) 
{
    case 0: console.log('Chu nhat'); break; 
    case 1: console.log('Thu hai'); break; 
    case 2: console.log('Thu ba'); break; 
    case 3: console.log('Thu tu'); break; 
    case 4: console.log('Thu nam'); break; 
    case 5: console.log('Thu sau'); break; 
    default: console.log('Chu nhat'); break; 
}