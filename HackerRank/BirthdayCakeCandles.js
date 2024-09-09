const readLine = require('prompt-sync')(); 
function main() 
{
    let n = Number(readLine()); 
    let a = readLine().split(' ').map(x => Number(x.trim())); 
    let max = 0; 
    for (let i = 0; i<a.length; ++i) max = Math.max(max,a[i]); 
    let res = 0; 
    for (let i =0; i<a.length; ++i) if (a[i] === max) ++res; 
    console.log(res); 
}
main(); 