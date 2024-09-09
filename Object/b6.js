
function calculator(a,b) {
    this.a = a; 
    this.b = b; 
    this.sum = function(){
        return (this.a + this.b) 
    }
    this.minus = function() {
        return (this.a - this.b)
    }
    this.multi = function() {
        return (this.a * this.b) 
    }
    this.divide = function() {
        return (this.a / this.b) 
    }
}
const readLine = require('prompt-sync')(); 
let [a,b] = readLine().split(' ').map(x => Number(x.trim())); 
const calc = new calculator(a,b);
console.log('Phep cong: ',calc.sum()); 
console.log('Phep tru: ',calc.minus()); 
console.log('Phep nhan: ',calc.multi()); 
console.log('Phep chia: ',calc.divide()); 
