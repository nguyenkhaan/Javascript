//Bai toan Catch the Coin tren codeforces 
const get = require('prompt-sync')();
function solve() {
    let [x,y] = get().split(' ').map(x=>Number(x.trim())); 
    if (y >= -1) console.log('YES'); 
    else console.log('NO'); 
}
let T; 
T = Number(get()); 
while (T--) solve(); 