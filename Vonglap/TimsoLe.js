const readLine = require('prompt-sync')(); 
function solve(a) 
{
    let d = 0; 
    for (let i of a) if (i % 2 != 0) ++d; 
    return d; 
}
const a = readLine().split(' ').map(x => Number(x.trim())); 
console.log(solve(a)); 