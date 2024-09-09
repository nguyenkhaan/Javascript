const get = require('prompt-sync')(); 
var fac = [1]; 
function giaiThua(n) {
    for (let i = 1; i<=n; ++i) fac.push(i * fac[i-1]); 
    return fac[n]; 
}
let n = Number(get()); 
console.log(giaiThua(n));