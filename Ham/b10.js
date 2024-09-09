const get = require('prompt-sync')(); 
function solve() {
    let n = Number(get()); 
    let a = get().split(' ').map(x=>Number(x.trim())); 
    a.push('a'); 
    let b = []; 
    for (let i = 0; i<n; ++i) {
        if (a[i+1]!=a[i]) b.push(a[i]); 
    }
    console.log(b); 
}
solve(); 