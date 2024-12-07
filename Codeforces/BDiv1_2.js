const readLine = require('prompt-sync')(); 
function solve() 
{
    let s = readLine() 
    if (s.length == 1) {
        console.log(-1); 
        return; 
    }
    for (let L = 0; L <= s.length - 3; ++L) 
    {
        if (s[L] != s[L+1] && s[L+1] != s[L+2] && s[L] != s[L+2]) {
            console.log(s[L] + s[L+1] + s[L+2]); 
            return; 
        }
        if (s[L] == s[L+1]) {
            console.log(s[L] + s[L+1]); 
            return; 
        }
        if (s[L+1] == s[L+2]) {
            console.log(s[L+1] + s[L+2]); 
            return; 
        }
    }
    if (s[s.length - 2] == s[s.length - 1]) {
        console.log(s[s.length - 2] + s[s.length - 1]) 
        return; 
    }
    console.log(-1); 
}
function main() 
{
    tc = Number(readLine()); 
    while (tc--) solve(); 
}
main(); 