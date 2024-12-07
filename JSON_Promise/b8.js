const readLine = require('prompt-sync')(); 
const n = Number(readLine()) 
const isEven = () => (n % 2 == 0)  
function check(isEven,n) 
{
    return new Promise( 
        function(resolve, reject) {
            setTimeout(function() {
                if (isEven(n)) resolve(); 
                else reject() 
            },1000)
        }
    )
} 
check(isEven , n) 
    .then(function() {
        console.log('yes') 
    })
    .catch(function() {
        console.log('no') 
    })
