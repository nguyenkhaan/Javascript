const input = require('prompt-sync')(); 
var x = Number(input('Nhap bien so xe: ')); 
while (x<1000 || x>9999) 
{
    console.log('Xin nhap lai: '); 
    x = Number(input('Nhap bien so xe: ')); 
}
while (x) 
{
    let k = x % 10; 
    console.log('Cac chu so cua x: ',k); 
    x = Math.trunc(x/10); 
}
