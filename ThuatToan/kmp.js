const readLine = require('prompt-sync')(); 
function lps(t) 
{
    let lps = Array(t.length).fill(0); 
    let i = 1, len = 0; 
    lps[0] = 0; 
    while (i < t.length) 
    {
        if (t[i] == t[len]) 
        {
            ++len; 
            lps[i] = len; 
            ++i; 
        } 
        else 
        {
            if (len != 0) len = lps[len - 1]; 
            else {
                lps[i] = 0; 
                ++i; 
            }
        }
    }
    return lps; 
}
function kmp_search(s,t,lps) 
{
    let i = 0, j = 0; 
    while (i < s.length && j < t.length) 
    {
        if (s[i] == t[j]) 
        {
            ++i; 
            ++j; 
            if (j == t.length) return (i - t.length); 
        }
        else 
        {
            if (j != 0) j = lps[j-1]; 
            else ++i; 
        }
    }
    return -1; 
}
function main() 
{
    var [s,t] = readLine().split(' '); 
    var _lps = lps(t); 
    console.log(kmp_search(s,t,_lps)); 
}
main(); 