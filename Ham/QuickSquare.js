const get = require('prompt-sync')(); 
function quick_quare(a,b) {
    let res = 1; 
    while (b) {
        if (b%2!=0) res = res *a; 
        a *= a; 
        b = Math.trunc(b/2); 
    }
    return res; 
}
var [a,b] = get().split(' ').map(x=>Number(x.trim())); 
console.log(quick_quare(a,b)); 