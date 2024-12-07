//Luyen tap bai toan  
const readLine = require('prompt-sync')(); 
var [n,p] = readLine().split(' ').map(x => Number(x.trim())); 
const count = function(n,p) 
{
    let ans = 0, temp = p;  
    while (Math.trunc(n / temp) > 0) 
    {
        ans += Math.trunc(n / temp); 
        temp *= p; 
    }
    return ans; 
}
console.log(count(n,p)); 