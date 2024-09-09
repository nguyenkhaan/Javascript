const prompt = require('prompt-sync')(); 
let input = prompt('Nhap ngay thang nam: '); 
let [d,m,y] = input.split(' ').map(item=>parseInt(item.trim())); 
var nam_nhuan = (year) => 
{
    if ((year % 4 ==0) || (year % 400 ==0 && year%100 ==0)) return true; 
    return false; 
}; 
if (d == 30)
{
    if ((m == 4) || (m == 6) || (m == 9) || (m == 11))
    {
        d = 1;
        m++; 
    }
}
else if (d == 31) 
{
    if ((m==1) || (m == 3) (m == 5) || (m == 7) || (m == 8) || (m == 10))
    {
        d = 1; 
        m++;
    }
    else 
    {
        d = 1; 
        m = 1; 
        y++; 
    }
}
else if (nam_nhuan(y) && d == 29 && m == 2) 
{
    d = 1; 
    m ++; 
}
else d++;  
console.log(d,' ',m,' ',y); 