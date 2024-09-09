const readLine = require('prompt-sync')(); 
function solve(nums,target) 
{
    nums.sort((a,b) => a - b);  //neu khong them ham thi mac dinh la sap xep theo thu tu tu dien 
    var res = Infinity; 
    var resSum = 0; //undefined 
    for (let i = 0; i<nums.length; ++i) 
    {
        left = i + 1; 
        right = nums.length - 1; 
        while (left < right) 
        {
            let sum = nums[left] + nums[right] + nums[i]; 
            if (res > Math.abs(sum - target)) {
                resSum = sum; 
                res = Math.abs(sum - target); 
            } 
            if (sum > target) --right; 
            else if (sum < target) ++left; 
            else return sum; 
        }
    }
    return resSum;  
}
let [n,target] = readLine().split(' ').map(x => Number(x.trim())); 
let a = readLine().split(' ').map(x => Number(x.trim())); 
console.log(solve(a,target)); 