const readLine = require('prompt-sync')();  
const n = readLine(); 
function checkPaline(n) 
{
    const len = n.length; 
    for (let i = 0; i*2 < len; ++i) {
        if (n[i] != n[len - i - 1]) return 0; 
    }
    return 1; 
}
if (checkPaline(n)) console.log('Yes'); 
else console.log('No'); 