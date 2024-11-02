const readLine = require('prompt-sync')(); 
let n = Number(readLine()); 
const check = (n) => (n >= 5); 
function isBig(n,check) 
{
    return new Promise( 
        function(resolve,reject) 
        {
            if (check(n)) resolve(); 
            else reject(); 
        }
    )
}
isBig(n,check) 
    .then(function() {
        console.log('Yes'); 
    })
    .catch(function() {
        console.log('no'); 
    })