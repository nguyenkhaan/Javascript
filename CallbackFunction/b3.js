const readLine = require('prompt-sync')(); 
const a = readLine().split(' ').map(x => Number(x.trim())); 
function transform(a,callback) 
{
    for (let i = 0; i < a.length; ++i) a[i] = callback(a[i]); //co the gan hai kieu du lieu khac nhau 
    //mot kieu la Number = function() 
    return a; 
}
const double = (x) => x*2;   
console.log(transform(a,double)); //tryen ham chu khong thuc thi 