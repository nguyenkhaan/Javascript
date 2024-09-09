//viet chuong trinh tim so lon nhat trong 3 so va luu no vao bien a 
const readLine = require('prompt-sync')(); 
function pass(ref) {this.ref = ref;} 
let [a,b,c] = readLine().split(' ').map(x => Number(x.trim())); 
function searchMax(a,b,c) 
{
    if (a.ref < b.ref) a.ref = b.ref; 
    if (a.ref < c.ref) a.ref = c.ref; 
}
[a,b,c] = [new pass(a),new pass(b),new pass(c)]; 
searchMax(a,b,c); 
console.log(a.ref); 