const readLine = require('prompt-sync')(); 
function solve() 
{
    let n = Number(readLine()); 
    for (let i = 1; i<=n; ++i) { 
        let s = ''; 
        for (let j = 0; j<(n - i); ++j) s += ' ';  
        for (let j = 1; j<=i; ++j) s += '#';   
        console.log(s); 
    }
}
solve(); 