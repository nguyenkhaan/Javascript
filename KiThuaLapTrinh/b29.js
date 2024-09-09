const prompt = require('prompt-sync')(); 
let n = prompt('Nhap so: '); 
n = Number(n); //Neu chi co 1 bien thi lam the nay cho nhanh 
const myFunction = (n) => 
{
    for (let i = 2; i*i<=n; i++) 
    {
        if (n% i==0) return 0; 
    }
    return 1; 
}; 
if (myFunction(n)) console.log('La so nguyen to '); 
else 
{
    while (myFunction(n) == false)  
    {
        n--; 
    }
    console.log(n); 
}