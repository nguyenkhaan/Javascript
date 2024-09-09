const prompt = require('prompt-sync')(); 
let input = prompt('Nhap so '); 
input = parseInt(input); 
const nguyenTo = (n) => 
{
    for (let i = 2; i*i<=n; i++) 
    {
        if (n % i ==0) return 0; 
    }
    return 1; 
}; 
if (nguyenTo(input)) console.log('La so nguyen to'); 
else console.log('Khong la so nguyen to'); 