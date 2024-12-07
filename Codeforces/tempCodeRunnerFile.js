function solve() 
{
    var [n,m] = readLine().split(' ').map(x => Number(x.trim())); 
    var s = []; 
    for (let i = 0; i < n; ++i) {
        let x = readLine(); 
        s.push(x); 
    }
    let cnt = 0; 
    for (let i = 0; i < s.length; ++i) 
    {
        if (m >= s[i].length) {
            m -= s.length; 
            ++cnt; 
        } 
        else break; 
    }
    console.log(cnt); 
}
function main() 
{
    var tc = Number(readLine()); 
    while (tc--) solve(); 
}