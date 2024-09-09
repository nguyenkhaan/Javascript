const readLine = require('prompt-sync')(); 
var s = readLine(); 
function chuanHoa(s) 
{
    s = s.trim(); 
    while (s.indexOf('  ')!=-1) s = s.replace('  ',' ');  
    let n = s.length; 
    for (let i = 0; i<n; ++i) if (s[i] == ' ') 
    {
        s = s.slice(0,i+1) + s[i+1].toUpperCase() + s.slice(i+2); 
    }
    s = s[0].toUpperCase() + s.slice(1); //phai dung cach nay de thay the ki tu trong chuoi 
    return s; 
}
s = chuanHoa(s); 
console.log(s); 