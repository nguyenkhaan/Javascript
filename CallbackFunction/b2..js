const readLine = require('prompt-sync')(); 
var a = readLine().split(' ').map(x => Number(x.trim())); 
function filter(a,callback) 
{
    let res = []; 
    for (let i = 0; i < a.length; ++i) if (callback(a[i])) res.push(a[i]); 
    return res; 
}
var isEven = (x) => (x % 2 == 0); 
var isOdd = (x) => (x % 2 != 0); 
console.log(filter(a,isEven));   //khi truyen call-back thi chi truyen ten ham nac danh thoi, khong truyen them tham so 

console.log(filter(a,isOdd)); 