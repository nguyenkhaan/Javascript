const prompt = require('prompt-sync')(); 
let input = prompt('Nhap 3 he so: '); 
let [a,b,c] = input.split(' ').map(item=>parseInt(item.trim())); 
if (a == 0) 
{
    if (b == 0) 
    {
        if (c == 0) console.log('Phuong trinh vo so nghiem '); 
        else console.log('Phuong trinh vo nghiem'); 
    }
    else 
    {
        var x = -c/b; 
        console.log('Nghiem: ',c);
    }
}
else 
{
    var delta = b**2 - 4*a*c; 
    var x1 = (-b+Math.sqrt(delta))/(2*a); 
    var x2 = (-b-Math.sqrt(delta))/(2*a); 
    console.log(x1,' ',x2);
}