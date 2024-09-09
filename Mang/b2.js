const input = require('prompt-sync')(); 
let n = Number(input('Nhap so: ')); 
var a = [0]; 
const random = (m,n) => 
{
    let res = Math.floor(Math.random() * (n-m+1)) +m; 
    return res; 
}; 
const start = 10, end = 20; 
for (let i = 1; i<=n; i++) a.push(random(start,end)); 
console.log(a);
let sumChan = 0, sumLe = 0; 
for (let i = 1; i<=n; i++)  
{
    if (a[i] % 2 == 0 && i%2!=0) sumChan += a[i]; 
    if (a[i] % 2 !=0 && i%2==0) sumLe += a[i]; 
}
if (sumChan == sumLe) console.log('YES'); 
else console.log('NO'); 
const ucln = function ucln(a,b) 
{
    if (b == 0) return a; 
    else return ucln(b,a%b); 
}; 
for (let i = 1; i<=n; i++) 
{
    for (let j = i+1; j<=n; j++) if (ucln(a[i],a[j]) == 1) console.log(a[i],'  ',a[j]); 
}