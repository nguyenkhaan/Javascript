/**
 * Viết chương trình nhập vào một số n. Thực hiện yêu cầu sau: 
 * 1. Kiểm tra n phải số hoàn hảo không 
 * 2. Kiểm tra n phải số nguyên tố ko 
 * 3. Đếm số lượng chữ số 
 * 4. Tính tổng các chữ số 
 * 5. 
 */
const input = require('prompt-sync')(); 
let n = Number(input('Nhap so: ')); 
//Kiem tra so hoan hao va nguyen to truoc nhe 
const hoanHao = (n) => 
{
    let sum = 0; 
    for (let i = 2; i*i<=n; i++) if (n%i==0) 
    {
        sum += (i + n/i); 
    } 
    if (sum == n-1) return 1; 
    return 0; 
}; 
const nguyenTo = (n) => 
{
    for (let i = 2; i*i<=n; i++) if (n % i==0) 
    {
        return 0; 
    }
    return 1; 
}
let d = 0, sum = 0; 
if (hoanHao(n)) console.log('Hoan hao'); 
    else console.log('Khong hoan hao'); 
if (nguyenTo(n)) console.log('Nguyen to');
    else console.log('Khong nguyen to'); 
while (n) 
{
    let k = n % 10; 
    d++; 
    sum += k; 
    n = Math.trunc(n/10); 
}
console.log('Co tat ca',d,'chu so');
console.log(sum); 
