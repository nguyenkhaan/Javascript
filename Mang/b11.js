const input = require('prompt-sync')(); 
const INT_MIN = -1e9; 
let n = input(); 
let a = input().split(' ').map(x=>Number(x.trim())); 
//Viet chuong trinh mo phong thuat toan Kanade va PrefixKanade 
let sum1 = 0, sum2 = INT_MIN; 
for (let i = 0; i<n; i++) 
{
    sum1 += a[i]; 
    if (sum2 < sum1) sum2 = sum1; 
    if (sum1<0) sum1 = 0; 
}
console.log(sum2); 