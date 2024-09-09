const readLine = require('prompt-sync')(); 
function solve() 
{
    const n = Number(readLine()); 
    const a = []; 
    for (let i = 0; i<n; ++i) 
    {
        let x; 
        x = Number(readLine()); 
        a.push(x); //phuong thuc mutating 
    }
    let sum = 0; 
    for (let i = 0; i<n; ++i) sum += a[i]; 
    console.log(sum); 

}
solve(); 
