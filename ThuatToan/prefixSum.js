function main() 
{
    const readLine = require('prompt-sync')(); 
    const a = readLine().split(' ').map(x => Number(x.trim())); 
    a.unshift(0); 
    var p = Array(a.length).fill(0); 
    p[0] = 0; 
    for (let i = 1; i <= a.length; ++i) p[i] = p[i-1] + a[i]; 
    let q = Number(readLine()) 
    while (q--) 
    {
        let [l,r] = readLine().split(' ').map(x => Number(x.trim())); 
        console.log(p[r] - p[l-1]); 
    }
}
main() 