const input = require('prompt-sync')(); 
let n = Number(input()); 
var prime = Array(n+1).fill(1); 
const sangNguyenTo = function (n) 
{
    for (let i = 2; i*i<=n; i++) 
    {
        if (prime[i] == 1) 
        {
            for (let j = i*i; j<=n; j+=i) prime[j] = 0; 
        }
    }
}; 
let s = ''; 
sangNguyenTo(n); //Chu y tham so 
for (let i = 2; i<=n; i++)
{
    if (prime[i] == 1) s+= i + ' '; 
}
console.log(s); 