//Viet chuong trinh chuan hoa lai Chuoi 
const input = require('prompt-sync')(); 
var s = input('Nhap chuoi: '); 
//Xu li dau cach 
const spaceFix = (s) => 
{
    while (s.search('  ') != -1) s = s.replace('  ',' '); 
    s = s.trim(); 
    return s; 
}; 
s = spaceFix(s); 
//Xu li phan chu Hoa, chu Thuong 
const caseFix = (s) => 
{
    var a = s.split(' '); 
    for (let i = 0; i<a.length; i++) 
    {
        a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1).toLowerCase(); 
    }
    s = a.join(' '); 
    return s; 
}
s = caseFix(s); 
console.log(s); 
