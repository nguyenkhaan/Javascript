//tao mot hang cac xe, lap qua cac thuoc tinh cua cac xe 
function Brand(name,make,model,year) {
    this.name = name; //tham chieu toi doi tuong 
    this.make = make; 
    this.model = model; 
    this.year = year; 
}
const readLine = require('prompt-sync')(); 
const a = []; 
let n = Number(readLine('Enter the number of cars ')); 
for (let i = 0; i<n; ++i) {
    console.log('Enter the info for ',i+1); 
    const [name,make,model,year] = readLine().split(' '); 
    const x = new Brand(name,make,model,year); 
    a.push(x); 
}
console.log(a); 