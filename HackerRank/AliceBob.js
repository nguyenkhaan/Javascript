const readLine = require('prompt-sync')(); 
function main() 
{
    const a = readLine().split(' ').map(x => Number(x.trim())); 
    const b = readLine().split(' ').map(x => Number(x.trim())); 
    var A = 0, B = 0; 
    for (let i = 0; i < 2; ++i) {
        if (a[i] > b[i]) ++A; 
        else if (a[i] < b[i]) ++B; 
    }
    console.log(A,B); 
}
main(); 