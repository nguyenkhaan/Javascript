//Tim so nguyen to lon nhat trong mang 
const get = require('prompt-sync')(); 
var prime = Array(1000).fill(1); 
function sangNguyenTo(n) {
    for (let i = 2; i*i<=n; ++i) {
        if (prime[i]) {
            for (let j = i*i; j<=n; j+=i) prime[j] = 0; 
        }
    }
}
sangNguyenTo(); 
var res = 0; 
let n = Number(get()); 
let a = get().split(' ').map(x=>Number(x.trim())); 
for (let i = 0; i<n; ++i) {
    if (prime[a[i]])  res = Math.max(res,a[i]); 
}
console.log(res); 