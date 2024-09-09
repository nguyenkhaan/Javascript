const readLine = require('prompt-sync')(); 
function pass(ref) {this.ref = ref} 
//viet chuong trinh sap xpe mang 
const a = readLine().split(' ').map((x) => Number(x.trim())); 
let l = 0; 
let r = a.length - 1; 
const swap = function(a,b) {
    let t = a.ref; 
    a.ref = b.ref; 
    b.ref = t; 
}
while (l < r) 
{
    for (let i = l; i<=r-1; ++i) if (a[i] > a[i+1]) 
    {
        [a[i],a[i+1]] = [new pass(a[i]),new pass(a[i+1])]; 
        swap(a[i],a[i+1]); 
        [a[i],a[i+1]] = [a[i].ref,a[i+1].ref]; 
    }
    r--; 
    for (let i = r; i>=l+1; --i) if (a[i] < a[i-1]) 
    {
        [a[i],a[i-1]] = [new pass(a[i]),new pass(a[i-1])]; 
        swap(a[i],a[i-1]); 
        [a[i],a[i-1]] = [a[i].ref,a[i-1].ref]; 
    }
    l++; 
}
console.log(a); 