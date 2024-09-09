//** Nhập vào một số nguyên N rất lớn, in ra kết quả của nó khi chia cho 17 */
const input = require('prompt-sync')(); 
let s = input('Nhap so: '); 
const MOD = 17; 
let mod = 0; 
for (let i=0; i<s.length; i++) 
{
    mod = (mod*10 + Number(s[i])) % MOD; 
} 
console.log(mod); 