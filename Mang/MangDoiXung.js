const readLine = require('prompt-sync')(); 
function solve(a) 
{
    let ok = 1; 
    for (let i = 0; 2*(i-1) < a.length; ++i) 
    {
        if (a[i] != a[a.length - i - 1]){
            ok = 0; 
            break; 
        } else continue; 
    }
    return ok; 
}
const n = readLine(); 
const a = readLine().split(' ').map(x => Number(x.trim())); 
if (solve(a)) console.log('yes'); 
else console.log('no'); 
