//Viet chuogn trinh tim so nguyen to lon nhat 
const get = require('prompt-sync')(); 
var a,n; 
function input() {
    n = Number(get()); 
    a = get().split(' ').map(x=>Number(x.trim())); //Cau lenh nay thi da dinh nghia a la mang r
}
function nguyenTo(n) {
    if (n<2) return 0; 
    for (let i = 2; i*i<n; ++i) if (n % i ==0) return 0; 
    return 1; 
}
function solve() {
    input();  
    let res = 0; 
    for (let i = 0; i<n; ++i) {
        if (nguyenTo(a[i])) res = Math.max(res,a[i]); 
    }
    return res; 
}
console.log(solve()); 