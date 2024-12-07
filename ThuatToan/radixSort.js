const readLine = require('prompt-sync')(); 
const {max} = Math; 
function main() 
{
    var a = readLine().split(' ').map(x => Number(x.trim())); 
    var bucket = Array(10); 
    for (let i = 0; i <= 9; ++i) bucket[i] = [];  
    var exp = 1 , ma = max(...a); 
    while (ma / exp > 0)
    {
        while (a.length > 0) 
        {
            var num = a[a.length - 1]; 
            var digit = Math.trunc((num / exp)) % 10; 
            bucket[digit].push(num); 
            a.pop(); 
        }
        for (let i = 0; i <= 9; ++i) 
        {
            while (bucket[i].length > 0)
            {
                var num = bucket[i][bucket[i].length -1]; 
                a.push(num); 
                bucket[i].pop(); 
            }
        }
        exp *= 10; 
    } 
    console.log(a); 
}
main(); 