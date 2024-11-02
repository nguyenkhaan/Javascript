const readLine = require('prompt-sync')(); 
const a = readLine().split(' ').map(x => Number(x.trim())); 
const isEven = (x) => (x % 2 == 0); 
function search(a,callback) 
{
    for (let i = 0; i < a.length; ++i) if (callback(a[i])) return a[i]; 
    return undefined; 
}
const res = search(a,isEven); 
console.log(res); 