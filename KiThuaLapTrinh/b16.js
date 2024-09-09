const prompt = require('prompt-sync')(); 
var sin = prompt('Nhap so: '); 
sin = '0' + sin; 
let s1 = 0, s2 = 0; 
for (var i=1; i<sin.length-1; i++) 
{
    if (i % 2!=0) s1 += parseInt(sin[i]); 
    else 
    {
        let t = parseInt(sin[i])*2; 
        if (t >= 10) 
        {
            while (t)
            {
                let k = t % 10; 
                s2 += k; 
                t = Math.trunc(t/10); 
            }
        }
        s2 += t; 
    }
}
if ((s1 + s2 + parseInt(sin[sin.length-1])) % 7 == 0) console.log('Hop le') 
    else console.log('Khong hop le');  