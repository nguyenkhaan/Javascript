//Viet chuong trinh kiem tra so nguyen to 
function nguyenTo(n) {
    if (n < 2) return 0; 
    for (let i = 2; i*i<n; ++i) {
        if (n % i == 0) return 0; 
    }
    return 1; 
}
const get = require('prompt-sync')(); 
var n = Number(get()); 
if (nguyenTo(n)) console.log('YES'); 
else console.log('NO'); 