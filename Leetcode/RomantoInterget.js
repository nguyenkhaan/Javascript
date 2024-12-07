const readLine = require('prompt-sync')(); 
const {trunc} = Math; 
function binary_search(a,x) 
{
    let ans = 0; 
    let l = 0, r = a.length - 1; 
    while (l <= r) 
    {
        let mid = trunc((l + r) / 2); 
        if (a[mid] <= x) {
            ans = a[mid]; 
            l = mid + 1; 
        } 
        else r = mid - 1; 
    }
    return ans; 
}
function main() 
{
    var n = Number(readLine()); 
    var roman = {
        1: 'I', 5: 'V', 4: 'IV', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM',1000: 'M'
    }; 
    var ans = ""; 
    var inte = Object.keys(roman).map(x => Number(x)).sort((a,b) => a - b); 
    while (n > 0) 
    {
        let m = binary_search(inte,n); 
        ans += roman[m];   //tu dong chuyen thanh chuoi 
        n -= m; 
    }
    console.log(ans); 

}
main() 