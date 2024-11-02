/**Lấy Elements trong DOM 
 * 1. ID, className, tagName 
 * - ID: 
 *      + Dùng để gán 1 thuộc tính định danh duy nhất cho 1 element trong HTML 
 *      + Mỗi id tồn tại duy nhất trong 1 trang HTML 
 * - className: 
 *      + Dùng để gán 1 thuộc tính định danh cho 1 nhóm các elements 
 *      + Mỗi className có thể tồn tại nhiều lần 
 * - tagName: tên thẻ 
 * 2. CSS Selector, HTML Selection 
 * a) CSS Selector 
 * - Là qui tắc dùng để truy cập tới các elenemts trong CSS 
 * <tagName>: truy cập tới tất cả thẻ đó trong file HTML 
 * #id_name: truy cập tới element có id_name 
 * .class_name: truy cập tới nhóm element có class_name 
 * - Ta có thể phối hợp các id, class_name, tagName để tạo thành 1 đường dẫn 
 * VD: .box-1 #id2 -> truy cập tới div (box - 1) và trong đó, truy cập tới element có id2 
 * b) HTML Selection 
 * - Tập hợp các elements trong HTML tạo thanh 1 kiểu dữ liệu giống mảng 
 * 3. Các method để lấy Element 
 * document.getElementByID('id_name'); 
 * document.getElementsByTagName('tag_name') 
 * document.getElementsByClassName('class_name'); 
 * docuament.querySelector('CSS Selector'); 
 */