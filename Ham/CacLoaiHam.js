const readLine = require('prompt-sync')(); 
const {max} = Math; 
class Solution 
{
    main() 
    {
        var s = readLine(); 
        s = "a" + s; 
        var a = Array.from({length : 28} , () => Array(s.length + 1).fill(0)); 
        for (let i = 1; i < s.length; ++i) 
        {
            let idx = s[i].charCodeAt(0) - 96; 
            for (let j = 1; j <= 26; ++j) 
                if (j == idx) a[idx][i] = a[idx][i-1] + 1; 
                else a[j][i] = a[j][i-1]; 
        }
        var ans = -Infinity; 
        var l_p = 1, r_p = l_p; 
        while (l_p <= r_p && r_p < s.length) 
        {
            r_p++; 
            let flag = true; 
            for (let i = 1; i <= 26; ++i) if (a[i][r_p] - a[i][l_p - 1] > 1) {
                flag = false; 
                break; 
            }
            if (!flag) l_p++; 
            else ans = max(ans, r_p - l_p); 
        }
        return ans; 
    }
}
const main = new Solution() 
console.log(main.main()); 