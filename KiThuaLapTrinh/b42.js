const input = require('prompt-sync')(); 
let [a1,b1,c1] = input('Nhap gio phut giay thu nhat: ').split(' ').map(x=>parseInt(x.trim())); 
//kiem tra gio phut giay 
const functionCheck = (a,b,c) => 
{
    //Giay thi phai nam trong khoang tu 0 - 59 
    //Phut cung phai nam trong khoang tu 0 - 59 
    //Gio thi nam trong khoang tu 0 - 23 
    if (c<0 || c>59 || b<0 || b>59 || a<0 || a>24) return 0; 
    return 1; 
}; 
const again = () => 
{
    let a,b,c;
    [a,b,c] = input('Xin moi nhap lai: ').split(' ').map(x=>parseInt(x.trim())); 
    return [a,b,c]; 
};
while (functionCheck(a1,b1,c1) == false) 
{
    [a1,b1,c1] = again(); 
}
let [a2,b2,c2] = input('Nhap gio phut giay thu hai: ').split(' ').map(x=>parseInt(x.trim())); 
while (functionCheck(a2,b2,c2) == false) 
{
    [a2,b2,c2] = again(a2,b2,c2); 
}
//Tinh tong gio phut giay 
var cauclation = (a1,b1,c1,a2,b2,c2) => 
{
    let a = a1 + a2; 
    let b = b1 + b2 + (a1+a2)*60; 
    let c = c2 + c1 + (b1+b2)*60 + (a1+a2)*3600; 
    return [a,b,c]; 
}; 
var [a,b,c] = cauclation(a1,b1,c1,a2,b2,c2); 
const myString = ['Tong so gio la: ','Tong so phut la: ','Tong so giay la: ']; 
console.log(myString[0] + a); 
console.log(myString[1] + b); 
console.log(myString[2] + c); 