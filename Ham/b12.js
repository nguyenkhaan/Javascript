const get = require('prompt-sync')(); 
function solve() {
    let a = get().split(' ').map(x=>Number(x.trim())); 
    const mp = new Map(); 
    a.forEach((v,i) => {
        mp.set(a[i], (mp.get(a[i]) || 0) + 1);  
    }); 
    mp.forEach((k,v) => {
        console.log(); 
    }); 
}
console.log(5*'5'); 
solve(); 