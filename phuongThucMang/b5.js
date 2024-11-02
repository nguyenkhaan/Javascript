const readLine = require('prompt-sync')(); 
const a = readLine().split(' ').map(x => Number(x.trim())); 
var check = a.some(x => (x % 2 == 0)); 
if (check) console.log('hop le'); 
else console.log('khong hop le'); 
