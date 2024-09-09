const input = require('prompt-sync')(); 
var s = input('Nhap chuoi: '); 
while (s.search('  ')!=-1) s = s.replace('  ',' '); 
s = s.trim(); 
var a = s.split(' '); 
for (let i=0; i<a.length; i++) 
{
    a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1).toLowerCase(); 
}
s = a.join(' '); 
console.log(s); 