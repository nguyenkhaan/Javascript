const prompt = require('prompt-sync')(); 
let input = prompt('Nhap phan so: ');  
let [x,y] = input.split(' ').map(item=>parseInt(item.trim())); 
const UCLN = function UCLN(a,b) 
{
    if (b == 0) return a; 
    else return UCLN(b,a%b); 
}; 
var t = 1; 
if (x<0) 
{
    t = -1; 
    x = Math.abs(x); 
}
var ucln = UCLN(x,y); 
x  = t * (x/ucln); 
y /= ucln; //Neu chia het thi no tu dong chuyen ve so nguyen ^^ 
console.log('Sau khi rut gon:',x,' /',y);
