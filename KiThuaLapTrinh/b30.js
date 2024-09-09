const prompt = require('prompt-sync')(); 
let n = prompt('Nhap so n: '); 
n = parseInt(n); 
let sum = 0; 
for (var i = 2; i*i<n; i++) if (n%i == 0)
{
    sum += (i + n/i);  
}
if (sum == n-1) console.log('La so hoan hao ');
else console.log('Khong la so hoan hao'); 