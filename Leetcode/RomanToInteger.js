function make_inp(mp) 
{
    mp.set('I',1); 
    mp.set('V',5); 
    mp.set('X',10); 
    mp.set('L',50); 
    mp.set('C',100); 
    mp.set('M',1000); 
    mp.set('D',500); 
    mp.set('IV',4); 
    mp.set('IX',9); 
    mp.set('XL',40); 
    mp.set('XC',90);  
    mp.set('CD',400); 
    mp.set('CM',900); 
    return mp; 
}
const readLine = require('prompt-sync')(); 
const s = readLine(); 
const mp = new Map(); 
make_inp(mp); 
let i = 0; 
let res = 0; 
while (i < s.length) 
{
    let tempS = ''; 
    if (i <= s.length - 2) tempS += (s[i] + s[i+1]); 
    else tempS += s[i]; 
    if (mp.has(tempS) && tempS.length == 2) {
        i+=2; 
        res += mp.get(tempS); 
    }
    else {

        res += mp.get(s[i]);
        i++; 
    }
}
console.log(res); 