//Viet chuong trinh loc ra cac cac so nguyen to trong mang 
const readLine = require('prompt-sync')(); 
let a = readLine().split(' ').map(x => Number(x.trim())); 
const isPrime = function(n) {
    if (n < 2) return false; 
    for (let i = 2; i*i <= n; ++i) if (n % i == 0) return false; 
    return true; 
}
function check(a,callback) 
{
    let ans = []; 
    for (let i = 0; i < a.length; ++i) if (isPrime(a[i])) ans.push(a[i]); 
    return ans; 
}
console.log(check(a,isPrime)); 