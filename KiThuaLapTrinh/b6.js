//Tu dong goi thanh 1 Promise neu khong tra ve 1 Promise 
//Viet chuong trinh kiem tra so nguyen to su dung Promise, neu la so nguyen to thi in ra cac chu so nguyen to nho hn
function isPrime(n) 
{
    if (n < 2) return false; 
    for (let i = 2; i * i <= n; ++i) if (n % i == 0) return false; 
    return true; 
}
function Calc(n) 
{
    for (let i = 2; i <= n; ++i) if (isPrime(i)) console.log(i); 
}
const readLine = require('prompt-sync')(); 
n = Number(readLine()); 
function getPromise(n,isPrime) 
{
    return new Promise( 
        function(resolve,reject) 
        {
            if (isPrime(n)) resolve(n); 
            else reject(); 
        }
    )
}
getPromise(n,isPrime) 
    .then(function(n) {
        console.log('yes'); 
        return n; 
    })
    .then(function(n) {
        Calc(n); 
    })
    .catch(function() {
        console.log('Loi'); 
    })