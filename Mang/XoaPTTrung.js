const readLine = require('prompt-sync')(); 
function solve() 
{
    const n = Number(readLine()); 
    const a =  readLine().split(' ').map(x => Number(x.trim())); 
    let b = []; 
    for (let i = 0; i<a.length; ++i) if (!b.includes(a[i])) b.push(a[i]); 
    console.log(b); 
}
solve(); 