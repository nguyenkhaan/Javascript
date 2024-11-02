const readLine = require('prompt-sync')(); 
const nums = readLine().split(' ').map(x => Number(x.trim())); 
nums.unshift(0); 
let dp = new Array(nums.length + 2).fill(-1); 
dp[1] = 0; 
for (let i = 2; i <= nums.length - 1; ++i) 
{
    let res = Infinity; 
    for (let j = 1; j < i; ++j) {
        if (nums[j] >= (i - j)) res = Math.min(res,dp[j]);  
    }
    dp[i] = res + 1; 
}
console.log(dp[nums.length - 1]); 