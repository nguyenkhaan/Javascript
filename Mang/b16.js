const get = require('prompt-sync')(); 
let n = Number(get()); 
let a = get().split(' ');  
a = a.map(function(s) {
    s = s.length; 
    return s; 
})
console.log(a); 