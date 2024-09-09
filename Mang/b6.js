const input = require('prompt-sync')(); 
let n = Number(input()); 
let a = input().split(' ').map(x=>Number(x.trim())); 
function deleteRepeat() 
{
    let mySet = new Set(a); 
    console.log(mySet); 
}
function solve() 
{
    let sum = 0, d = 0; 
    for (let i = 0; i<n; i++) if (a[i] % 2!=0 && a[i] <0)
    {
        sum += a[i]; 
        ++d; 
    }
    console.log(sum / d); 
    deleteRepeat(); 
}
solve(); 

