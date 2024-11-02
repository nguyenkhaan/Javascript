const readLine = require('prompt-sync')(); 
const a = readLine().split(' ').map(x => Number(x.trim())); 
let s = a.reduce((res,current) => {
    return (res += current); 
},'');  
console.log(s); 