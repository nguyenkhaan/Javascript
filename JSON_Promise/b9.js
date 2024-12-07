const readLine = require('prompt-sync')(); 
const a = readLine().split(' ').map(x => Number(x.trim())); 
ans = a.reduce((t,curr) => {
    return t + ((curr % 2 != 0)?curr:0); 
},0) 
console.log(ans);  //Tinh tong cac so le su dung ham reduce 