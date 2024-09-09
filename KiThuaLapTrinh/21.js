const input = require('prompt-sync')(); 
let n = Number(input('Nhap diem chuan: ')); 
let [a,b,c] = input('Nhap diem 3 mon: ').split(' ').map(item=>parseFloat(item.trim())); 
var doiTuong = 
{
    A: 1, B: 2, C: 3 
}; 
var uuTien = 
{
    '1': 1, '2': 0.5, '3': 0.25 
}; 
let [h,k] = input('Nhap doi tuong va khu vuc uu tien: ').split(' ');   
if (a + b + c + h + k >= n) console.log('Dau'); 
else console.log('Rot'); 