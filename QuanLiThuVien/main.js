const readLine = require('prompt-sync')(); 
let t = Number(readLine()); 
if (t >= 80) 
    console.log('Good day for swimming'); 
else if (70 <= t && t < 80) 
    console.log('Good dya for golfing'); 
else 
    console.log('Khong lam gi'); 