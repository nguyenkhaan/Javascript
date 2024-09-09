//Viet ham kiem tra so hoan hao 
function perfect(n) {
    let sum = 0; 
    for (let i = 2; i*i<=n; ++i) if (n % i == 0) {
        sum += (i + n/i); 
    }
    if (sum == n-1) return 1; 
    else return null; 
}
const get = require('prompt-sync')(); 
var n = Number(get()); 
if (perfect(n)) console.log('YES'); 
else console.log('NO'); 