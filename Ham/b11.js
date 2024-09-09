const get = require('prompt-sync')(); 
function solve() {
    let a = get().split(' ').map(x=>Number(x.trim())); 
    const mp = new Map(); //co phuong thuc get va set 
    let count = 0, ans = 0;  
    for (let i = 0; i<a.length; ++i) {
        mp.set(a[i],(mp.get(a[i]) || 0)+1); 
        if (mp.get(a[i]) >= count) {
            count = mp.get(a[i]); 
            ans = a[i]; 
        }
    }
    console.log(ans); 
}
solve();