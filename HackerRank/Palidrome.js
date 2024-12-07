const readLine = require('prompt-sync')(); 
var s = readLine(); 
var s1 = ""; 
for (let i of s) s1 = i + s1; 
if (s1 === s) console.log('yes'); 
else console.log('no'); 