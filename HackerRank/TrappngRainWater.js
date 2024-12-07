const readLine = require('prompt-sync')(); 
var trap = function(height) 
{
    const n = height.length; 
    var right_max = Array(n + 2).fill(0); 
    var left_max = Array(n + 2).fill(0); 
    left_max[0] = height[0]; 
    for (let i = 1; i < n; ++i) left_max[i] = Math.max(height[i] , left_max[i-1]); 
    right_max[n-1] = height[n - 1]; 
    for (let i = n - 2; i >= 0; --i) right_max[i] = Math.max(height[i] , right_max[i + 1]); 
    water = 0; 
    for (let i = 0; i < n; ++i) {
        let u = Math.min(right_max[i] , left_max[i]); 
        if (u > height[i]) water += u - height[i] 
    }
    return water;
}
const a = readLine().split(' ').map(x => Number(x.trim())) 
console.log(trap(a)) 