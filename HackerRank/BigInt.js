const readLine = require('prompt-sync')(); 
function main() 
{
    let a = readLine().split(' ').map(x=>BigInt(x.trim()));
    var sum = 0n; 
    for (let i = 0; i<a.length; ++i) sum += a[i]; 
    const s = sum.toString(); 
    console.log(s); 
}
main(); 