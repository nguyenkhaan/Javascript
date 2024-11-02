const readLine = require('prompt-sync')(); 
const a = readLine().split(' ').map(x => Number(x.trim())); //day la mot ham roi, goi callback roi chay thoi  
function isElementsCorrect(a,callback) 
{
    for (let i = 0; i < a.lenght; ++i) if (!callback(a[i])) return false; 
    return true; 
}
const isEven = (x) => (x % 2 == 0); 
if (isElementsCorrect(a,isEven)) console.log('yes'); 
else console.log('no'); 