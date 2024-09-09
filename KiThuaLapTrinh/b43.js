function pass(ref) {this.ref = ref} 
const readLine = require('prompt-sync')(); 
let [x,y] = readLine().split(' ').map(x => Number(x.trim())); 
[x,y] = [new pass(x),new pass(y)]; //phuong thuc phan ra mang 
const myFuntion = function(x = new pass(x),y = new pass(y)) 
{
    let t = x.ref; 
    x.ref = y.ref; 
    y.ref = t; 
} 
myFuntion(x,y); 
x = x.ref; 
y = y.ref; 
console.log(typeof x); 