/**
 * 46   240 
 * Tìm hai số x và y sao cho ax + by = g 
 * g = gcd(a,b) 
 * Nếu đến bước 0: 2x1 + 0.0 = 2  
 * NGHỊCH ĐẢO MODULO 
 * nghịch đao modul của a mod M là 1 số x thỏa mãn 
 * ax + My = 1 hay gcd(a,M) = 1 
 * FEMAT nhỏ 
 * - Nếu M là số nguyên tố thì đồng dư của a MOD M là a^(M-2) 
 */
let x = Array(20).fill(0); 
let y  =Array(20).fill(0); 
let cnt = 0; 
function extendedEuclid(a,b) 
{
    if (b == 0) 
    {
        x[0] = 1; 
        y[0] = 0; 
        return; 
    } 
    extendedEuclid(b,a%b); 
    ++cnt; 
    x[cnt] = y[cnt-1]; 
    y[cnt] = x[cnt-1] - Math.trunc(a/b) * y[cnt-1]; 
    console.log(a,b,x[cnt],y[cnt]); 
}
const readLine = require('prompt-sync')(); 
const [a,b] = readLine().split(' ').map(x => Number(x.trim()));  
const gcd = (a,b) => {
    if (b == 0) return a; 
    else return gcd(b,a%b); 
}
if (gcd(a,b) == 1) {
    extendedEuclid(a,b); 
}
else console.log('Khong co nghich dao MODULO'); 
//neu nhu la so am thi phai them b do de cho no thanh so duong 