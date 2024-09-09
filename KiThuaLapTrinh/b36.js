/** 
 * Viet chuong trinh in ra thua so nguyen to 
 */
const input = require('prompt-sync')(); 
let n = Number(input('Nhap so: ')); 
var prime = Array(n+1).fill(1); 
const sangNguyenTo = function (n)
{
    for (let i =2; i*i<=n; i++) 
    {
        if (prime[i]) 
        {
            for (let j = i*i; j<=n; j+=i) prime[j] = 0; 
        }
    }
}; 
sangNguyenTo(n); 
var Prime = []; 
for (let i = 2; i<=n; i++) if (prime[i]) Prime.push(i);  
let d = Prime.length - 1; 
let s = ''; 
while (n!=1) 
{
    while (n % Prime[d] == 0) 
    {
            n /= Prime[d]; 
            s += (String(Prime[d]) + ' '); 
    } 
    d--; 
}
console.log(s); 