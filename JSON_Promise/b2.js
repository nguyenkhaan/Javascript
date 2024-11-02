function message(mess,ms) 
{
    return new Promise(
        function(resolve) {
            setTimeout(resolve,ms);  
        }
    )
}
const readLine = require('prompt-sync')(); 
let mess = readLine(); 
let time = Number(readLine('Enter your time (ms): ')); 
message(mess,time)
    .then(function() {
        console.log(1); 
        return message(mess,time); 
    })
    .then(function() {
        console.log(2); 
        return message(mess,time); 
    })
    .then(function() {
        console.log(3); 
        return message(mess,time); 
    })