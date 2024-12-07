const readLine = require('prompt-sync')(); 
var s = readLine(); 
var i = Number(readLine()); 
function _repeat(re = 1, s) {
    for (let i = 0; i < re; ++i) console.log(s); 
}
_repeat(i,s); 