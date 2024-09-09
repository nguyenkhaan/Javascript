const prompt = require('prompt-sync')(); 
let [a,b] = prompt('Nhap hai so: ').split(' ').map(x=>Number(x.trim())); 
const quickSquare = (a,b) => 
{
    let result = 1; 
    while (b) 
    {
        if (b%2!=0) result*=a; 
        a*=a; 
        b = Math.trunc(b/2); 
    }
    return result; 
}
console.log(quickSquare(a,b));