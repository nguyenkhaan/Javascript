const readLine = require('prompt-sync')(); 
const s = readLine(); 
var lps = new Array(s.length); 
function LPS(s) 
{
    let len = 0; 
    let i = 1; 
    let lps = new Array(s.length); 
    while (i < s.length) 
    {
        if (s[i] == s[len]) {
            ++len; 
            lps[i] = len; 
            ++i; 
        }
        else //neu nhu khong khop 
        {
            if (len) len = lps[len - 1]; 
            else {
                lps[i] = 0; 
                ++i; 
            }
        }
    }
    return lps; 
}
lps = LPS(s); 
const T = readLine(); 
function kmpSearch(lps) 
{
    let i = 0; //dai dien cho chuoi T 
    let j = 0; //dai dien cho chuoi S
    let d = 0; 
    while (i < T.length) 
    {
        if (T[i] == s[j]) {
            ++i; 
            ++j; 
            if (j == s.length) {
                ++d; 
                j = lps[j - 1]; //cho j lui ve de xet tiep 
            }
        }
        else 
        {
            if (j != 0) j = lps[j - 1];  
            else ++i; 
        }
    }
    return d; 
}
console.log(kmpSearch(lps)); 