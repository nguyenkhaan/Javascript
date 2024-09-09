const prompt = require('prompt-sync')(); 
let input = prompt('Nhap 3 canh tam giac: '); 
let [a,b,c] = input.split(' ').map(item=>parseFloat(item.trim())); 
if ((a+b>c) && (a+c>b) && (b+c>a))
{
    if (a==b==c) console.log('Tam giac deu '); 
    else if ((a**2+b**2==c**2) || (a**2+c**2==b**2) || (c**2+b**2==a**2)) 
    {
        console.log('Tam giac vuong'); 
    }
    else if ((a==b || b==c || c==a) && (a**2+b**2==c**2 || a**2+c**2==b**2 || c**2+b**2==a**2))
    {
        console.log('Tam giac vuong can '); 
    }
    else if (a==b || b==c || c==a) console.log('Tam giac can'); 
    else console.log('Tam giac thuong'); 
} 
else console.log('Khong phai tam giac'); 
