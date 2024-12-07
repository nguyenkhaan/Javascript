//Viet chuong trinh xac dinh no la loai tam giac gi tu ba canh 
const readLine = require('prompt-sync')(); 
const [a,b,c] = readLine().split(' ').map(x => Number(x.trim())); 
const isRec = (a,b,c) => {
    if (a + b > c && a + c > a && b + c > a) return 1; 
    return 0; 
}
function typeOfRec(isRec,a,b,c) 
{
    [a,b,c] = [a,b,c].sort(); 
    if (isRec(a,b,c)) {
        //Thuc hien sap xep lai ba cai nay di 
        if (a == b && b == c) console.log('Deu'); 
        else if (a*a + b*b == c*c) console.log('Vuong'); 
        else if (a == b) console.log('Can'); 
        else console.log('Thuong'); 
    }
} 
typeOfRec(isRec,a,b,c); 