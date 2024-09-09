const readLine = require('prompt-sync')(); 
function makeArr() 
{
    this.x = myArray() //giong nhu tao 1 struct 
    function myArray() 
    {
        let a = new Array(2); 
        for (let i = 0; i<2; ++i) a[i] = new Array(2).fill(0); 
        return a; 
    }
}
function makeMultiply(a,b) 
{
    var c = new makeArr(); 
    for (let i = 0; i<2; ++i) 
    {
        for (let j = 0; j<2; ++j) 
        {
            for (let k = 0; k<2; ++k) c.x[i][j] += (a.x[i][k] * b.x[k][j]); 
        }
    }
    return c; 
}
function Pow(T,n) 
{
    let unit = new makeArr(); 
    for (let i =0; i<2; ++i) unit.x[i][i] = 1; 
    if (!n) return unit; 
    let ans = unit; 
    while (n) 
    {
        if (n % 2 != 0) ans = makeMultiply(ans,T);  
        T = makeMultiply(T,T); 
        n = Math.trunc(n / 2); 
    }
    return ans; 
}
const n = Number(readLine()); 
var T = new makeArr(); 
T.x[0][0] = T.x[0][1] = T.x[1][0] = 1; 
T = Pow(T,n-1); 
var u = new makeArr(); 
u.x[0][0] = 1; 
var ans = new makeArr(); 
ans = makeMultiply(T,u); //khong the ghi de toan tnu nen minh phai lam cach nay 
console.log(ans.x[0][0]); 
