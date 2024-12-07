const readLine = require('prompt-sync')(); 
const {trunc,min} = Math; 
class Solution 
{
    static solve(a,b) 
    {
        const m = a.length, n = b.length; 
        let l = 0, r = m - 1, total = m + n; 
        let k = trunc(total / 2); 
        while (l <= r) 
        {
            let m1 = trunc((l + r) / 2); 
            let m2 = k - m1 - 2; 
            let Aleft = ((m1 >= 0)? a[m1] : -Infinity); 
            let Aright = ((m1 < m)? a[m1 + 1] : Infinity); 
            let Bleft = ((m2 >= 0)? b[m2] : -Infinity); 
            let Bright = ((m2 < n)? b[m2 + 1] : Infinity); 
            if (Aleft <= Bright && Bleft <= Aright) {
                if (total % 2 != 0) return min(Aright, Bright); 
                else return trunc((Aright + Bright) / 2); 
            } 
            if (Aleft > Bright) r = m1 - 1; 
            if (Bleft > Aright) l = m1 + 1; 
        }
    }
    main() 
    {
        var a = readLine().split(' ').map(x => Number(x.trim())); 
        var b = readLine().split(' ').map(x => Number(x.trim())); 
        if (a.length > b.length) [a,b] = [b,a]; 
        console.log(Solution.solve(a,b)); 
    }
}
const main = new Solution(); 
main.main(); 