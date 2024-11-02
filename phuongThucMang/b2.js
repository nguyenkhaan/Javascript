const readLine = require('prompt-sync')(); 
const a = readLine().split(' ').map(x => Number(x.trim()));  
var res = a.reduce(function(res,currentVal) {
    return (res + currentVal);  
},0); 
console.log(res); 