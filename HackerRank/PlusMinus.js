const readLine = require('prompt-sync')(); 
function main() 
{
    let n = Number(readLine()); 
    let a = readLine().split(' ').map(x => Number(x.trim())); 
    let neg = 0, pos = 0, zero = 0; 
    for (let i = 0; i<n; ++i) 
    {
        if (a[i] < 0) ++neg; 
        if (a[i] > 0) ++pos; 
        if (a[i] == 0) ++zero; 
    }
    console.log((pos / n).toFixed(6)); 
    console.log((neg / n).toFixed(6)); 
    console.log((zero / n).toFixed(6)); 
}
main(); 