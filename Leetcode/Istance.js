/**INSTANCE CỦA ĐỐI TƯỢNG  
 * 1. Instance
 * Instance là một thể hiện cụ thể của 1 đối tượng, được tạo ra từ 1 class trong js 
 * Khai báo instance: let ten_instance = new Class_name() 
 * Chú ý: chỉ với arr, obj khai báo bthuong cũng thành instance
 * VD: let a = new Number(5); 
 * Khi khai báo instance -> kiểu dữ liệu là object -> tất cả instance đều là 
 * con của lớp Object 
 * Khởi tạo bằng object constructor cũng tạo ra 1 instance của class Object. 
 * Các instance khi được khởi tạo sẽ có đầy đủ, phương thức, thuộc tính như bình thường 
 * 2. Instance cấp tốc
 * - Là cách tạo ra instance cấp tốc, không cần phải khai báo 
 * - var/let/const ten_instance = cap_toc (tạo đối tượng bình thường)
 * a) .Array
 * Array(num): tạo 1 mảng, với num biến 
 * Array(a,b,c,d): tạo mảng [a,b,c,d]
 * Array.from(string): tạo mảng từ string 
 * Array(a,b,c,d).sort(): sắp xếp lại a,b,c,d 
 * - Ngoài ra ta còn kết hợp được với các phương thức khác của mảng 
 * b) .Object: cần có một đối tượng obj truyền vào: 
 * Object.freeze(obj): không cho thêm sửa xóa đối tượng... 
 * Object.seal(obj): ngăn thêm, xóa nhưng cho phép thay đổi dữ liệu 
 * Object.keys(obj): trả về mảng keys của đối tương 
 * Object.values(obj): trả về mảng value của đối tượng 
 * 
*/
console.log(Array(3,2,1).push(1)); //tra ve do dai moi cua mang do 
const person = {
    name: 'Son Dang', 
    age: 18 
}
console.log(Object.keys(person)); 