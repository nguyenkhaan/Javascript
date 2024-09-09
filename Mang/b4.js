const input = require('prompt-sync')(); 
let n = Number(input()); 
let a = input().split(' ').map(x=>parseInt(x.trim())); 
//for (let i = 0; i<n; i++) 
//{
    //let x = Number(input());   //De nhu the nay la nhap tung gia tri 
     
//}
s = ''; 
const checkFunction = (n) => 
{
    while (n) 
    {
        if (n%2!=0 && n!=1) return 0; 
        n = Math.trunc(n/2); 
    }
    return 1; 
}
let d = 0; 
for (let i = 0; i<n; i++) if (a[i] > 1) 
{
    if (checkFunction(a[i])) d++; 
}
console.log(d); 
let x = Number(input('Nhap x: ')); 
let b = []; 
for (let i = 0; i<n; i++) if (a[i] == x) a.splice(i,1,''); 
s = a.join(' '); 
console.log(s); 