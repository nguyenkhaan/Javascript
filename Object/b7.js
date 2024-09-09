const readLine = require('prompt-sync')();
function Books(name,year) {
    this.name = name; 
    this.year = year; 
}
var a = Array(new Books('a',1991),new Books('b',1992),new Books('c',1993)); 
a = a.filter(book => book.year > 1992); 
console.log(a); 