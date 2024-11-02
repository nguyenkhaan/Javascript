//Viet 1 ham nhap vao so n, kiem tra xem co hai nguyen to khong 
const readLine = require('prompt-sync')(); 
let n = Number(readLine()); 
const check = function(n) 
{
    if (n < 2) return 0; 
    for (let i = 2; i*i <= n; ++i) if (n % i == 0) return 0; 
    return 1; 
}
console.log(check(n)); 