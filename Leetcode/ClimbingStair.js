const readLine = require('prompt-sync')(); 
const n = Number(readLine()); 
let dp = []; 
dp.push(1); 
dp.push(2); 
i = 2; 
while (i < n) 
{
    dp[i] = dp[i-1] + dp[i-2]; 
    ++i; 
}
console.log(dp[n-1]); 