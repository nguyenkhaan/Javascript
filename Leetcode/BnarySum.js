const readLine = require('prompt-sync')(); 
function main() 
{
    var [s1,s2] = readLine().split(' '); 
    var s = ""; 
    if (s1.length > s2.length) [s1,s2] = [s2,s1]; 
    let m = s2.length - s1.length; 
    for (let i = 0; i < m; ++i) s1 = '0' + s1; 
    let rem = 0; 
    for (let i = s1.length - 1; i >= 0; --i) 
    {
        let t = Number(s1[i]) + Number(s2[i]) + rem; 
        rem = (t > 1)? 1 : 0; 
        s = String(t & 1) + s; 
    }
    if (rem == 1) s = '1' + s; 
    console.log(s); 
}
main(); 