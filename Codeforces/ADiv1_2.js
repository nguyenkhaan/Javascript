const readLine = require('prompt-sync')(); 
function solve() 
{
    let n = Number(readLine()); 
    let d = 1, ans = ''; 
    for (let i = 0; i < n; ++i) {
        ans += d + ' '; 
        d += 2; 
    }
    console.log(ans); 
}
function main() 
{
    tc = Number(readLine()); 
    while (tc--) solve(); 
}
main(); 
// const tc = Number(readLine()) 
// for (let i = 0; i < tc; ++i) main(); 