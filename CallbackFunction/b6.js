//Viet chuong trinh tinh tong uoc cua 1 so nguyen 
const readLine = require('prompt-sync')(); 
const n = Number(readLine()); 
function sumDivisor(n) {
    let ans = 0; 
    for (let i = 0; i * i <= n; ++i) if (n % i == 0) {
        if (i == n / i) ans += i; 
        else ans += (i + n / i); 
    }
    return ans - n; 
}
console.log(sumDivisor(n)); 