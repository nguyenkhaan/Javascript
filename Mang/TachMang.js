const readLine = require('prompt-sync')(); 
function solve(a) 
{
    let b = a.filter(x => x % 2 ==0); 
    return b; 
}
let a = readLine().split(' ').map(x => Number(x.trim())); 
let b = solve(a); 
console.log(b);  