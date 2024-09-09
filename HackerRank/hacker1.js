//https://www.hackerrank.com/contests/hack-the-interview-vi/challenges/maximum-sum-10-1
const readLine = require('prompt-sync')(); 
let [n,m] = readLine().split(' ').map(x => Number(x.trim())); 
let s = n*(n+1) / 2; 
let first = 1, end = n; 
while (m--) 
{
    let x = Number(readLine()); 
    if (first == x || end == x || (2<=x && x<=(n-1))) {
        [first,end] = [end,first]; 
        console.log(s); 
    } 
    else {
        s -= (end - x); 
        end = x; 
        console.log(s); 
    }
}
