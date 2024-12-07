const readLine = require('prompt-sync')(); 
const {trunc,abs,sqrt} = Math; 
const id = (s,i) => trunc((s + i -1) / s) 
function block(a,s,n) 
{
    let b = Array(n + 1).fill(0); 
    for (let i = 0; i < n; ++i) b[id(s,i)] += a[i]; 
    return b; 
}
function main() 
{
    const n = Number(readLine()); 
    const a = readLine().split(' ').map(x => Number(x.trim())); 
    a.unshift(0); 
    var s = trunc(sqrt(n)); 
    var b = block(a,s,n); 
    const q = Number(readLine()); 
    for (let tc = 0; tc < q; ++tc) 
    {
        let [ch,l,r] = readLine().split(' ').map(x => Number(x.trim())); 
        if (ch == 1) {
            b[id(s,l)] += r; 
            a[l] += r; 
            continue; 
        }
        let [idl, idr] = [id(s,l) , id(s,r)], ans = 0; 
        if (idl == idr) {
            for (let i = idl; i <= idr; ++i) ans += a[i]; 
            console.log(ans); 
            continue; 
        }
        for (let i = idl + 1; i <= idr; ++i) ans += b[i]; 
        let [El, Er] = [s*idl , s*idr + 1 - s]; 
        for (let i = El; i <= idl; ++i) ans += a[i]; 
        for (let i = Er; i <= r; ++i) ans += a[i]; 
        console.log(ans); 
    }
}
main() 