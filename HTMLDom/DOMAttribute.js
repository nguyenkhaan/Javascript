/**
 * DOM attribute
 * 1. Truy cập và gán thuộc tính định sẵn 
 * - Để truy cập thuộc tính định sẵn (id, title...) ta dùng toán tử . 
 * <ElementNode> . <Attribute_name> = value 
 * VD: 
 * Chú ý: riêng class thì Attribute là className 
 * Cách này chỉ sử dụng cho các attribute định sẵn của mỗi elemnts. VD thẻ <h1> không có href thì 
 * không .href được 
 * 2. Sử dụng phương thức 
 * setAttribute('attribute_name' , 'value'); 
 * getAttribute('attribute_name'); 
 * 3. Xóa attribute 
 * <ElementNode>.removeAttribute('Attribute_name'); 
 */
var headingElement = document.querySelector('h1'); 
//querySelector chi lay 1  
headingElement.id = "Heading"; 
headingElement.id = "Heading1"; //thuc hien ghi de len 
// headingElement.className = "heading";  
console.log(headingElement.id); //co the lam cach nay de get cung duoc
headingElement.removeAttribute('id'); 
//Them thuoc tinh id, class cho heading 2, them 1 thuoc tin hello bo sung. In ra tat ca thuoc tinh bang 2 cach 
var headingNode2 = document.querySelector('h2'); 
headingNode2.id = "heading2"; 
headingNode2.title = "newNode"; 
headingNode2.setAttribute('hello','HelloWorld'); 
console.log(headingNode2.getAttribute('id')); 
console.log(headingNode2.getAttribute('title')); 
console.log(headingNode2.getAttribute('hello')); 
headingNode2.removeAttribute('id'); 