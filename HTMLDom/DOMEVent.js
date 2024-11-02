/**
 * 1. Tổng quan về events 
 * a) Các loại sự kiện 
 * https://www.w3schools.com/jsref/dom_obj_event.asp.
 * UIEvents: giao diện (resize, scroll) 
 * AnimationEvent: khi CSS animation bắt đầu 
 * FocusEvent: khi 1 đối tượng được hoặc mất tậ trung 
 * MouseEvent: sự kiện liên quan tới Mouse 
 * KeyboardEvent: sư kiện liên quan tới Keyboard
 * b) Một số từ khóa sử dụng 
 * - Event Object: 
 *          là một đối tượng được tạo ra khi ta khai báo một event. 
 *          Chứa các thuộc tính, thông tin về sự kiện... 
 * - e, event: là tham số trả về khi có 1 event, gọi trong callback function(e) 
 * - this: tham chiếu tới Node đang thực hiện event 
 * 2. Attribute Events 
 * - Cú pháp: on<ten_su_kien> = "Javascript"; 
 * Ta cũng có thê truyền tên 1 hàm từ 1 file Js riêng được LK với html vào  
 * *Sự kiện nổi bọt (Bubble Events) 
 * - Cho 1 ParentElement và ChildElement. Thực hiện event lên ChildElement 
 * B1: Thực hiện event của ChildElement 
 * B2: Nổi bọt ra bên ngoài. Nếu như parentElement cũng có event thì thực hiện 
 * CÁCH NGĂN CHẶN SỰ KIỆN NỔI BỌT 
 * - Ta dùng câu lệnh event.stopPropagation() để ngăn không cho sự kiện nổi bọt 
 * Tại sao lại là event.stopProagation() chứ không phải this.stopPropagtion()? 
 * -> Vì stopPropagation() là 1 method của Event Object còn this tham chiếu tới 
 * ElementNode hiện tại 
 * 3. Assign event using the ElementNode
 * - Cách 1: 
 * <ElementNode>.on<ten_su_kien> = function() {}
 * - Xóa sự kiện: <ElemnetNode>.on<ten_su_kien> = null; 
 * <ElementNode>.on<ten_su_kien> = null; 
 * Chú ý: 
 * -> Event Callback Function 
 * Cách 2: eventListener 
 * <ElementNode>.addEventListener('ten_su_kien' , callbackfuntion() {}); 
 * - Xóa sự kiện: ElementNode>.removeEventListener('ten_su_kien' , callbackfuntion() {});
 * -> Bạn phải truyền y hệt những gì cần xóa. 
 * -> Nếu sử dụng hàm ẩn danh thì không xóa được (không có tham chiếu)
 * Chú ý: Chỉ khi có 2 sự kiện onclick giống nhau thì ms bị ghi đè, còn lại sẽ xử lí tuần tự
 * VD: 
 * headingNode.addEventHandler('click' , function() {
 *      console.log('Hello World');  
 * })
 * headingNode.addEventHandler('click' , function() {
 *      console.log('Xin chao cac ban'); 
 * })
 * -> Hello World 
 *    Xin chao cac ban. 
 */
h1Element = document.querySelector('h1'); 
h1Element.addEventListener('click',function(e) {
    console.log('Hello World'); 
}); 