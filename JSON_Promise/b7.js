//Viet romise kiem tra s hoan hao 
const readLine = require('prompt-sync')(); 
const check = (n) => {
    let s = 0; 
    for (let i = 1; i*i <= n; ++i) if (n % i == 0) {
        if (n/i == i) s += i; 
        else s += i + n/i; 
    }
    if (s == n*2) return true; 
    else return false; 
}
function perfectNumber(n,check) 
{
    console.log(check(n)); 
    return new Promise(
        function(resolve,reject) {
            if (check(n)) resolve(); 
            else reject(); 
        }
    )
}
const n = Number(readLine()); 
perfectNumber(n,check)
    .then(function() {
        console.log('Yes'); 
    })
    .catch(function() {
        console.log('No'); 
    })