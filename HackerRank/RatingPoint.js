const readLine = require('prompt-sync')(); 
function main() 
{
    let a = readLine().split(' ').map(x=>Number(x.trim())); 
    let b = readLine().split(' ').map(x=>Number(x.trim()));  
    let Alice = 0, Bob = 0; 
    for (let i = 0; i<a.length; ++i) {
        if (a[i] > b[i]) Alice++ 
        else if (a[i] < b[i]) Bob++; 
    }
    console.log(Alice,Bob); 
}
main(); 