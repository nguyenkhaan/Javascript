//Viet chuogn trinh liet ke so lan xuat hien cua tung pohan tu 
const get = require('prompt-sync')(); 
function solve() {
    let a = get().split(' ').map(x=>Number(x.trim())); 
    const count = new Map(); 
    for (let i = 0; i<a.length; ++i) {
        count.set(a[i],(count.get(a[i]) || 0) +1); 
    }
    count.forEach((k,v) => {
        console.log(k,'  ',v); 
    })
}
solve(); 