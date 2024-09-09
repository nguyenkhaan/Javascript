const get = require('prompt-sync')(); 
let a = get().split(' ').map((x) => Number(x.trim()));
function sort() {
    let start = 0; 
    let end = a.length - 1; 
    while(start < end) {
        for (let i = start; i<=end-1; ++i) if (a[i] > a[i+1]) [a[i],a[i+1]] = [a[i+1],a[i]]; 
        --end; 
        for (let i = end; i>=start+1; --i) if (a[i] < a[i-1]) [a[i],a[i-1]] = [a[i-1],a[i]];
        start++; 
    }
}
sort(); 
console.log(a); 
let x = Number(get('Nhap phan tu can chen: ')); 
for (let i = 0; i<a.length-1; ++i) if (a[i] <=x && x<=a[i+1]) 
    {
        a.splice(i+1,0,x.toString()); 
        a[i+1] = Number(a[i+1]); 
        break; 
    } 
console.log(a);