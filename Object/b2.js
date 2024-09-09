/** OBJECT 
 * 1. Tạo một đối tượng cụ thể 
 * ten_object = { 
 * key : value, 
 * key : value, 
 * key: value }
 * - Chỉ tồn tại 1 key 
 * - Value: số, chuỗi, mảng, hàm... 
 * - thêm 1 key: object.<key_name> = <value> 
 * - xóa 1 key:  delete object.<key_name> 
 * - Có thể dùng dấu . hoặc ['key_name'] để truy cập và thay đổi, sử dụng value 
 * 2. Từ khóa tham chiếu đối tượng 
 * Từ khóa this: tham chiếu tới đối tượng mà mã đang thực hiện 
 * Ngữ cảnh 1: toàn cục 
 * - Module environment broswer: source code -> file nhỏ 
 * Biến toàn cục trong MEB (strict-mode) sẽ không thành thuộc tính của đối tượng
 * window -> this không truy cập được -> undefined 
 * - Non-module environment browswer
 * Trong NMEB, biến đó thành thuộc tính của window -> this có thể truy cập được
 * VD: var a = 10  
 *  console.log(this.a) -> 10 
 * Giải thích tại sao chạy bằng VScode thì console.log(this.a) không ra 10 mà thành 
 * undefned, mặc dù đang là non-module evironment 
 * - Vì đây là non-module của node.js. Nó khác với non-module của trình duyệt. 
 * Trong đây: (1) var a -> a không thành thuộc tính của window mà thành của global 
 *            (2) this không tham chiếu tới global như mong muốn 
 * b) Ngữ cảnh đối tượng
 * - this tham chiếu tới đối tượng mã đang làm việc  
 * 3. Object constructor 
 * - tạo một object = hàm 
 * function ten_ham(tham so) {
 * thuoc tinh.....}
 * khai báo 1 đối tượng = constructor: 
 * var ten_doi_tuong = new constructor(); 
 * ---> Sử dụng như 1 đối tượng 
 * 
 * 
 */
