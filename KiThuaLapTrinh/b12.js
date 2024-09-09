const input = require('prompt-sync')(); 
let [a,b,c] = input('Nhap he so: ').split(' ').map(x=>parseFloat(x.trim())); 
if (a == 0) 
{
    if (b == 0)
    {
        if (c == 0) console.log('Phuong trinh vo so nghien '); 
        else console.log('Phuong trinh vo nghiem ')
    }
    else 
    {
        let x = -c / b; 
        console.log(x); 
    }
}
else 
{
    let delta = b**2 - 4 * a * c; 
    if (delta <0) console.log('Vo nghiem'); 
    else 
    {
        let x1 = (-b - Math.sqrt(delta)) / (2*a); 
        let x2 = (-b + Math.sqrt(delta)) / (2*a); 
        console.log(x1,' ',x2);
    }
}