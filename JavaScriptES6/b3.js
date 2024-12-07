function ma(fixed = -Infinity, ...args) {
    var ans = -Infinity; 
    for (let i of args) ans = Math.max(ans,i); 
    return Math.max(ans, fixed); 
} 
console.log(ma()); 