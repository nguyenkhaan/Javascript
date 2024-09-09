const get = require('prompt-sync')(); 
let n = get(); 
let a = get().split(' ').map(x=>Number(x.trim())); 
var mod = 1; 
const MOD = 17; 
for (let i = 0; i<n; i++) 
{
    mod = (mod*a[i]) % MOD; 
}
console.log(mod); 