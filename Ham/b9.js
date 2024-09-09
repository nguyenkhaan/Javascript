const get = require('prompt-sync')(); 
function solve() {
    let [x,y] = get().split(' ').map(x=>Number(x.trim())); 
    let [a,b] = get().split(' ').map(x=>Number(x.trim())); 
    b = Math.min(a*2,b); 
    if (x < y) [x,y] = [y,x]; 
    let res = y*b + a*(x-y); 
    console.log(res); 
}
solve(); 