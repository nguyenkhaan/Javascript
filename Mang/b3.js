const input = require('prompt-sync')(); 
let n = Number(input('Nhap n: ')); 
const random = (m,n) => 
{
    let res = Math.floor(Math.random() * (m-n+1)) + m; 
    return res; 
}; 
var a = []; //Neu khong khai bao thi no co kieu du lieu la undefined chu khong the tao thanh object 
//Xuat hien loi NaN co the la do ban da thuc hien phep vo cung hoac thieu syntax- cho ham xu li so 
const start = 10 , end = 20, d = 0; 
for (let i = 0; i<n; i++) 
{
    a.push(random(start,end)); 
    if ((a[a.length-1] % 4 ==0) && (a[a.length-1]%10==6)) ++d;  
} 
console.log(a); 
var s = ''; //undefined cung la 1 kieu du lieu, khi thuc hien phep noi voi 1 so thi no thanh chuoi 
//Nhan doi cac phan tu le: 
for (let i = 0; i<n; i++) if (a[i]%2!=0) s += a[i]*2 + ' '; 
console.log(s); 
// var b = null;  //Bang null thi thuc hien phep tinh duoc 
// b += 'hello';  //Thuc hien phep tinh thi thanh NaN (Not A Number)
// console.log(b); 