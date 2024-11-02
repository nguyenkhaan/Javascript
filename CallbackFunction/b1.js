const readLine = require('prompt-sync')(); 
let [a,b] = readLine().split(' ').map(x => Number(x.trim())); 
function calc(a,b,callback) 
{
    callback(a,b); 
}
calc(a,b,function(a,) {
    console.log(a + b); 
    console.log(a - b); 
    console.log(a * b); 
    console.log(a / b);
}); 