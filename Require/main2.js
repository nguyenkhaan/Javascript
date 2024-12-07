const {add,minus,multi,divi} = require('./calculator')
function showScreen() {
    console.log('--------------------------------------------'); 
    console.log('1. Cong'); 
    console.log('2. Tru'); 
    console.log('3. Nhan'); 
    console.log('4. Chia'); 
    console.log('5. Nhap so: '); 
    console.log('0. Exit'); 
    console.log('--------------------------------------------'); 
}
const readLine = require('prompt-sync')(); 
var a = 0, b = 0;
while (true)
{
    showScreen(); 
    let choice = Number(readLine('Nhap lua chon: ')); 
    if (!choice) break; 
     
    switch (choice) 
    {
        case 1: console.log(add(a,b)); break; 
        case 2: console.log(minus(a,b)); break; 
        case 3: console.log(multi(a,b)); break; 
        case 4: console.log(divi(a,b)); break; 
        case 5: [a,b] = readLine().split(' ').map(x => Number(x.trim())); break;
    }
}