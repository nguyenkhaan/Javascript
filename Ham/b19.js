//Tim so chinh phuong tu a toi b \
const readLine = require('prompt-sync')(); 
const {trunc,sqrt} = Math; 
class Solution 
{
    main() 
    {
        var [a,b] = readLine().split(' ').map(x => Number(x.trim())); 
        let cnt = 0; 
        for (let i = a; i <= b; ++i) 
        {
            if (trunc(sqrt(a)) ** 2 == a) ++cnt; 
        }
        console.log(cnt); 
    }
}
const main = new Solution() 
main.main(); 