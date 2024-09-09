//Lam viec voi chuoi 
var myString = '  Hoc JS JS JS tai F8    '; 
//1. Length: Lấy độ dài của chuỗi 
console.log(myString.length);
//2. indexOf(st,n): Tìm vị trí của st trong Chuỗi myString. Bắt đầu từ vị trí n
//Nếu k có thì in ra -1
console.log(myString.lastIndexOf('ABC')); 
//3. lastIndexOf(st): Tìm vị trí xuất hiện cuối cùng của st trong chuỗi 
console.log(myString.lastIndexOf('JS')); 
//4. search(st): Tìm kiếm vị trí chuỗi st trong chuỗi 
console.log(myString.search('JS')); 
//5. slice(start,end): Cắt chuỗi từ vị trí start tới end 
//Bỏ tham số thứ hai đi thì cắt tới kí tự nằm ngay sau vị trí cuối cùng 
//Ta cũng có thể cắt từ phải sang trái 
console.log(myString.slice(-3,-1)); 
//6. repalce(st1,st2): Dùng để ghi đè st1 đầu tiên thành st2 
//Không làm thay đổi chuỗi nếu không được gán 
console.log(myString.replace(/JS/g,'javascript')); 
//Nếu muốn ghi đè tất cả, ta phải dùng biểu thức chính quy 
//7. s.toLowerCase(): chuyển đổi thành chữ thường
//   s.toUpperCase(): chuyển đổi thành chữ hoa 
console.log(myString.toUpperCase()); 
//8. trim: loại bỏ kí tự thừa hai đầu 
console.log(myString.trim()); 
//9. split(' '): cắt 1 chuỗi thành array 
//Chuỗi rỗng: trả về 1 mảng chứa tất cả kí tự của chuỗi đó 
//Không truyền gì: trả về mảng chứa chính chuỗi đó 
var languages = 'Javascript, PHP, Ruby'; 
console.log(languages.split(''));
//10. charAt(index): lấy ra kí tự của chuỗi tại index
var myString2 = 'Son Dang'; 
console.log(myString2.charAt(1)); 
//11. array.join(seperator): Nối tất cả các phân tử trong mảng thành chuỗi, ngăn cách nhau 
//bởi seperator, nếu không truyền vào thì mặc định là dấu ,
//12. string.substring(a,b): Lấy đoạn con từ a tới (b-1) 
var a = ['h','e','l','l','o']; 
console.log(a.join()); 