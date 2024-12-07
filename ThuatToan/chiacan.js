const readLine = require('prompt-sync')(); 
const {trunc,sqrt,abs} = Math; 
const id =  (s,i) => trunc((s + i - 1) / s); 
function block(a,s) 
{
    var b = Array(a.length + 1).fill(0); 
    for (let i = 1; i < a.length; ++i) b[id(s,i)] += a[i]; 
    return b; 
}
function main() 
{
    var a = readLine().split(' ').map(x => Number(x.trim())); 
    a.unshift(0); 
    var n = a.length, s = trunc(sqrt(n - 1)); 
    var b = block(a,s); 
    var q = Number(readLine()); 
    for (let tc = 0; tc < q; ++tc) 
    {
        let [ch,l,r] = readLine().split(' ').map(x => Number(x.trim())); 
        if (ch == 1) {
            b[id(s,l)] += r; 
            a[l] += r; 
            continue; 
        }
        let [idl, idr] = [id(s,l) , id(s,r)] , ans = 0; 
        if (idl == idr) {
            for (let i = idl; i <= idr; ++i) ans += a[i]; 
            console.log(ans); 
            return; 
        }
        for (let i = idl + 1; i <= idr - 1; ++i) ans += b[i]; 
        let [El, Er] = [s*idl , s*idr - s + 1]; 
        for (let i = l; i <= El; ++i) ans += a[i]; 
        for (let i = Er; i <= r; ++i) ans += a[i]; 
        console.log(ans); 
    }
}
main(); 