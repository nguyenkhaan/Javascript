//Trong js sử dụng dấu /, còn khi dùng VS code thì nó dấu \
/** Lưu ý về điều hướng thư mục trong import: 
 * Ta có thể import 1 file js khác vào file js đang chạy 
 * import ten_instance from 'Path' (Path dùng dấu /) 
 * Copy Relative Path: sao chép đường dẫn tương đối 
 * ./: tham chiếu tới file hoặc thư mục nằm trong cùng thư mục với file hiện tại 
 * ../: di chuyển lên 1 cấp thư mục bên ngoài 
 */
const stack = require('../node_modules/Stack/Stack.js'); 
const st = new stack(); 
const readLine = require('prompt-sync')(); 
let n = Number(readLine()); 
let a = readLine().split(' ').map(x => Number(x.trim())); 
let p = 0; 
const left = []; 
for (let i = 0; i<n; ++i) {
    while (a[p] < a[i])
    {
        ++p; 
        if (p == i) {
            p = -1; 
            break; 
        }
    }
    left.push(p);  
    if (p == -1) p = 0; 
}
const right = []; 
p = a.length - 1; 
for (let i = a.length-1; i>=0; --i) {
    while (a[p] < a[i]) {
        --p;  
        if (p == i) {
            p = -1;  break; 
        } 
    }
    right.push(p); 
    if (p == -1) p = a.length - 1; 
}
let ma = 0; 
for (let i = 0; i<n; ++i) if (left[i] != -1 && right[i] != -1) {
    ma = Math.max(ma,right - left + 1); 
}
console.log(ma); 

