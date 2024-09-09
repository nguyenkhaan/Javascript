const readLine = require('prompt-sync')(); 
function main() 
{
    let s = readLine(); 
    let hour,minute,second,area; 
    function splitString() 
    {
        hour = s.slice(0,2); 
        minute = s.slice(3,5); 
        second = s.slice(6,8); 
        area = s.slice(8); 
    }
    splitString(); 
    if (area == 'PM' && hour>='01' && hour<='11') hour = (hour + 12).toString();  
    if (area == 'AM' && hour == '12') hour = '00'; 
    s = hour + ':' + minute + ':' + second + area; 
    console.log(s); 

}
main(); 