const readLine = require('prompt-sync')(); 
function solve() 
{
    var n = Number(readLine()); 
    var s = readLine(); 
    var count = {}; 
    for (let i of s) 
            if (!count[i]) count[i] = 1; 
            else count[i]++; 
    let ma = 0, ch1 = ''; 
    for (let [a,b] of Object.entries(count)) if (ma < b) {
        ma = b; 
        ch1 = a; 
    }
    let mi = Infinity, ch2 = ''; 
    for (let [a,b] of Object.entries(count)) if (mi > b && a != ch1) {
        ch2 = a; 
        mi = b; 
    }
    if (ch2 == '') {
        console.log(s); 
        return; 
    }
    else {
        for (let i = 0; i < s.length; ++i) if (s[i] == ch2) {
            s = s.slice(0,i) + ch1 + s.slice(i + 1); 
            break; 
        }
        console.log(s);  
    }
}
function main() 
{
    var tc = Number(readLine()) 
    while (tc--) solve(); 
}
main(); 