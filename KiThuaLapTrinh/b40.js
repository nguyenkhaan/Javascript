const get = require('prompt-sync')(); 
let s = get(); 
s = '0' + s; 
let ans = 0; 
for (let i = 1; i<=100; i++)
{
    let ok = true; 
    for (j = 1; j<Math.trunc(s.length / i)-1; j+=i) 
    {
        if (s.slice(j,j+i) != s.slice(j+i,j+2*i)) 
        {
            ok = false; 
            break; 
        }
    }
    if (ok == true) 
    {
        ans = i; 
        break; 
    }
}
console.log(ans); 