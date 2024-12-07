//In ra gia tri gap doi cua mot so sau 1s 
function double(n) 
{
    return new Promise( 
        function(resolve) {
            setTimeout(() => resolve(n) , 1000);  //phai boc no trong 1 ham an danh 
        }
    )
}
const readLine = require('prompt-sync')(); 
let n = Number(readLine()); 
double(n) 
    .then(function(n) {
        console.log(n * 2); 
        return double(n * 2); 
    })
    .then(function(n) {
        console.log(n * 2); 
        return double(n * 2); 
    })
    .then(function(n) {
        console.log(n * 2); 
        return double(n * 2); 
    })