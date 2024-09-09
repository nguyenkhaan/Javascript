const prompt = require('prompt-sync')(); 
let n =prompt('Nhap so: '); 
n = Number(n); 
let prime = Array(n).fill(1); //Tao ra mot mang co n phan tu va lam day no bang so 1 
const sangNguyenTo = function(n) 
{
    for (var i = 2; i*i<=n; i++) 
    {
        if (prime[i]) 
        {
            for (var j = i*i; j<=n; j+=i) prime[j] = 0; 
        }
    }
};
sangNguyenTo(n); 
var s = ''; 
for (var i=2; i<=n; i++) if (prime[i]) 
{
    s += (i + ' '); 
}
console.log(s); //Chuyen thanh chuoi de co the in tren 1 dong 