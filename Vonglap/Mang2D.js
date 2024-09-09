//tu khoa new la ndung de khoi dmong, trao ra  instance. May cai khac co the hieu la ho tro cho instance do \
const readLine = require('prompt-sync')(); 
var col,row; 
[col,row] = readLine().split(' ').map(x => Number(x.trim())); 
//Neu ta su dung cach thong thuong, ta khong the khai bao array voi kich thuoc n duoc. 
//Neu muon thi ta phai thong qua phuong thuc ho tro Instance cua Array 
const a = new Array(row); 
for (let i = 0; i<a.length; ++i) a[i] = new Array(col);  
for (let i = 0; i<a.length; ++i) 
{
    a[i] = readLine().split(' ').map(x => Number(x.trim())); 
}
