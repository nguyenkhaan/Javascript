const readLine = require('prompt-sync')(); 
let a = new Array(100); 
for (let i = 0; i<5; ++i) 
{
    a[i] = Number(readLine()); //Minh phai nhap va enter tung dong chu khong duoc nhap cach ra
}
console.log(a); 