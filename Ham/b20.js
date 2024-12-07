const readLine = require('prompt-sync')(); 
const {sqrt,trunc} = Math; 
var a = [] 
class Solution 
{
    static prime(n) 
    {
        if (n < 2) return false; 
        for (let i = 2; i <= trunc(sqrt(n)); ++i) if (n % i == 0) return false; 
        return true; 
    }
    static main() 
    {
        var n = Number(readLine()) 
        for (let i = 2; i <= 32; ++i) 
        {
            if (Solution.prime(i) && Solution.prime((1<<i) - 1)) 
                a.push(((1<<i) - 1) * (1<<(i-1)))
        }
        if (a.find(x => x == n)) console.log('yes') 
            else console.log('no') 
    }
}
Solution.main() 
var b = {
    name: 'Bob', 
    age: 18,
    greet() {
        console.log('yes') 
    }
}
b.greet() 
