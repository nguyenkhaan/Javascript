const readLine = require('prompt-sync')(); 
const {abs} = Math; 
var n = Number(readLine()); 
let r1 = 0, r2 = 0; 
for (let i = 0; i < n; ++i) 
{
    const a = readLine().split(' ').map(x => Number(x.trim())); 
    r1 += a[i]; 
    r2 += a[n - i - 1]; 
}
console.log(abs(r1-r2)); 