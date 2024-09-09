//Viet chuong trinh kiem tra so nguyen to trong mang 
const get = require('prompt-sync')(); 
const nguyenTo = (n) => {
    if (n<2) return 0; 
    for (let i = 2; i*i<=n; ++i) if (n % i==0) return 0; 
    return 1; 
}
let a = get().split(' ').map(x=>Number(x.trim())); 
a.forEach(c => {
    if (nguyenTo(c)) console.log('YES'); 
    else console.log('NO'); 
})