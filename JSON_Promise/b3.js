const check = (num) => {
    if (num < 2) return 0; 
    for (let i = 2; i * i <= num; ++i) if (num % i == 0) return 0; 
    return 1; 
}
function isPrime(n,check) 
{
    return new Promise(
        function(resolve,reject) 
        {
            if (check(n)) resolve(); 
            else reject(); 
        }
    )
}
const readLine = require('prompt-sync')(); 
let n = Number(readLine()); 
isPrime(n,check) 
    .then(function() {
        console.log('La so nguyen to'); 
    })
    .catch(function() {
        console.log('Khong la so nguyen to'); 
    })