/** 
 * 1. Tao mảng
 * C1: var ten_bien = []
 * C2: var ten_bien = Array(so phan tu).fill(0); 
 * 2. Truy xuất mảng 
 */
var languages = [
    'Javascript', 
    'Python', //-> Phan tu cua mang 
    'Ruby', 
    null, 
    undefined,
    5
]; //Mang rong
//Khai bao mang chua san cac phan tu.
//Khong nhu C++, mang nay co the chua da dang kieu du lieu 
console.log(Array.isArray(languages));
//Kiem tra co phai array khong 
let b = Array(10); 
console.log(typeof languages); 