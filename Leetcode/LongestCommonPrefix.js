const readLine = require('prompt-sync')(); 
let a = readLine().split(' '); 
let mi = 1000000;  
for (let i = 0; i<a.length; ++i) mi = Math.min(mi,a[i].length); 
let counter = 0; 
var res = ''; 
var ok = 1; 
while (counter < mi) 
{
    for (let i = 0; i<a.length - 1; ++i) if (a[i][counter] != a[i+1][counter])
    {
        ok = 0;
        break;
    }
    if (ok) {
        res += a[0][counter]; 
        counter++; 
    } 
    else break; 
}
console.log(res); 