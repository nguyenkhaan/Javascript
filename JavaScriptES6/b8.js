const readLine = require('prompt-sync')(); 
function sumAll(...args) 
{
    var res = args.reduce(((s,current) => s + current),0); 
    return res; 
}
const a = readLine().split(' ').map(x => Number(x.trim())); 
console.log(sumAll(...a));  //phai ket hop voi spread operator moi duoc