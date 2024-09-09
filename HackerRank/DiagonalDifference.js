const readLine = require('prompt-sync')(); 
function main() 
{
    let n = Number(readLine()); 
    let a = new Array(n).fill(null).map(() => new Array(n).fill(null)); 
    for (let i = 0; i<n; ++i) a[i] = readLine().split(' ').map(x => Number(x.trim())); 
    let s1 = 0, s2 = 0; 
    for (let i = 0; i<n; ++i) 
    {
        s1 += a[i][i]; 
        s2 += a[i][n-i-1]; 
    }
    console.log(Math.abs(s1 - s2)); 
}
main(); 