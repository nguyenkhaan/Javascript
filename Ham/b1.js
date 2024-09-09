const get = require('prompt-sync')(); 
function cong(a,b){
    return a + b; 
}
var result = cong(5,6);
console.log(result); 
/** Một số điều cần biết về function 
 * 1. Function trùng tên
 * Khi định nghĩa 2 function trùng tên thì function sau cùng sẽ ghi đè
 * cái sau cùng 
 *  2. Hàm trong hàm 
 */
function showMessage() {
    function showMessage2()
    {
        console.log('Message 1'); 

    }
    showMessage2(); 
}
showMessage(); 