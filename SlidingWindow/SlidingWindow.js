const get = require('prompt-sync')(); 
let [n,k] = get().split(' ').map(x=>Number(x.trim()));  
let a = get().split(' ').map(x=>Number(x.trim())); 
let sum = 0, ans = 0; 
for (let i = 0; i<k; ++i) sum+=a[i]; 
ans = sum; 
for (let L = 1,R = L+k-1; R<n; ++R, ++L) 
    //Bien L dai dien cho phia dau cua so, Bien R dai dien cho phia sau cua so 
{
    sum = sum - a[L-1] + a[R]; 
    ans = Math.max(ans,sum); 
}
console.log(ans);
