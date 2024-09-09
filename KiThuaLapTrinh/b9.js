const prompt = require('prompt-sync')(); 
let input = prompt('Nhap 3 canh tam giac: '); 
    let [a,b,c] = input.split().map(item=>parseFloat(item.trim())); 
if ((a+b>c) && (b+c>a) && (c+a>b)) 
{
    console.log('La 3 canh tam giac '); 
    //Luyen tap cach su dung ham mui ten di nhe 
    const myFunction = (a,b,c) =>
    {
        let p = 0.5*(a+b+c); 
        let s = Math.sqrt(p*(p-a)*(p-b)*(p-c)); 
        return s; 
    };
    console(myFunction(a,b,c).toFixed(3)); 
} 
else console.log('Khong phai 3 canh tam giac ');