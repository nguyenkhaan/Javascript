const get = require('prompt-sync')(); 
function lis(a){
    let res = [1]; 
    let ans = 1; 
    for (let i = 1; i<a.length; ++i) 
    {
        let ma = res[i-1];  
        for (let j = 0; j<i; ++j) if (a[j] <= a[i]) ma = Math.max(ma,res[j]+1);  
        res.push(ma); 
        ans = Math.max(ans,ma); 
    }
    return ans; 
}
var n = Number(get()); 
var a = get().split(' ').map(x=>Number(x.trim())); 
console.log(lis(a)); 
