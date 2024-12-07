function main()
{
    const readLine = require('prompt-sync')(); 
    const n = Number(readLine()); 
    if (n <= 4) return 0;  
    let ans = [], x = 0 , y = 0; 
    for (x = 1; x <= 9; x += 2) {
        y = 9 - x; 
        if (y % 2 == 0) break; 
    } 
    for (let i = 1; i <= n; i += 2) if (i != x) ans.push(i); 
    ans.push(x); 
    ans.push(y); 
    for (let i = 2; i <= n; i += 2) if (i != y) ans.push(i); 
    return ans; 
}
console.log(main()); 