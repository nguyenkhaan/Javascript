const prompt = require('prompt-sync')(); 
console.log('Nhap he so thu 1 : '); 
let input = prompt(); 
let [a1,b1,c1] = input.split(' ').map(item=>parseInt(item.trim())); 
input = prompt(); 
let [a2,b2,c2] = input.split(' ').map(item=>parseInt(item.trim())); 
const D = a1*b2 - a2*b1; 
const Dx = c1*b2 - b1*c2; 
const Dy = a1*c2 - a2*c1; 
if (D != 0) 
{
    var x = Dx / D; 
    var y = Dy / D; 
    console.log('x =',x,' - ','y =',y); 
}
else 
{
    console.log('Khong the tinh'); 
}