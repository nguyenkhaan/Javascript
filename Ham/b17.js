//Viet chuong trinh cho hai chuoi a va b. Kiem tra xem chuoi b co phai la subsequence cua chuoi a khong 
const get = require('prompt-sync')(); 
function solve() {
    let a = get(); 
    a = a.split(''); //Mang moi co phuong thuc forEach
    let b = get(); 
    let i = 0; 
    a.forEach(c => {
        if (b[i] == c) ++i; 
    });
    if (i == b.length) console.log('YES'); 
    else console.log('NO'); 
}
solve(); 