//Viet de tao mot day ngau nhien 
const get = require('prompt-sync')(); 
function solve() {
    let n = Number(get()); 
    if (n / 2 %2 !=0) return 0; 
    let even = [] ,odd = []; //Muon su dung cac phuong thuc cua mang thi truoc tien no phai la mang  
    let d = 2; 
    for (let i = 0; i<n/2; ++i) {
        even.push(d); 
        odd.push(even[i]-1); 
        d += 2; 
    }
    odd[odd.length - 1] += (n/2); 
    even = even.concat(odd); 
    var s = even.join(' ');
    console.log(s); 
}
solve(); 