const get = require('prompt-sync')(); 
let a = get().split(' '); 
a = a.map(function(s){
    let ans = 0; 
    let n = s.length; 
    for (let i = n-1; i>=0; --i) if (s[i] == '1') 
    {
        ans += 2**(n - i -1); 
    } 
    return ans; 
})
console.log(a); 