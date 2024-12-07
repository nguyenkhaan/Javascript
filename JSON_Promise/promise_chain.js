/**
 * KIẾN THỨC VỀ PROMISE 
 * 1. Nỗi đau 
 * a. Đồng bộ. Bất đồng bộ 
 * - Đồng bộ (Synchronus): Code chạy tuyến tính từ trên xuống 
 * - Bất đồng bộ (A-Sync): Một số đoạn code ảnh hưởng tới luồng chạy đồng bộ 
 * (VD: viết trước chạy sau) 
 * VD: 
 * setTimeout(function() {
 *  console.log(1); 
 * },3000); 
 * console.log(2);  -> 2 1 
 * Một số ASynch: Reading file, setTimeout, setInterval, fetchAPI, XMLHttpRequest... 
 * -> Các A-sync đều đc cung cấp callback function để xử lí 
 * b. Callback-Hell 
 * VD: 
 * setTimeout(function(){
    console.log(1);  
    setTimeout(function() { //loi goi ham co chua callback da truyen va hay chinh la so 2 trong doan code cua minh 
        console.log(2); 
        setTimeout(function() {
            console.log(3)
            setTimeout(function() {
                console.log(4); 
                setTimeout(function() {
                    console.log(5); 
                })
            })
        })
    },1000); 
},1000); 
 * Vấn đề: Câu lệnh 2 cần dữ liệu của lệnh 1 để thực hiện. Câu lệnh 3 cần dữ liệu của 
 * lệnh 3 để thực hiện... => Callback Hell  
 * 2. Đối tượng promise 
 * a) Giới thiệu 
 * - Là cơ chế để xứ lí các tác vụ bất đồng bộ 
 * - Cú pháp: 
 * var ten_promise = new Promise(
 *      function(resolve,reject) -> executor: auto-run khi khởi tạo 1 promise 
 *      {
 *              //Logic 
 *              reject(): gọi khi thành công 
 *              resolve(): gọi khi thất bại 
 *      }
 * )
 * <ten_promise> 
 *  .then(function() {
 *   })
 *  .catch(function() {
 * 
 *  })
 *  .finally(function() {
 *   })
 * b) Tính chất của reject , resolve 
 * b.1: Promise có 2 trạng thái: reject / resolve. Khi đã chạy một trong 2 thì tất cả 
 * code phía sau dừng lại và không thể thay đổi trạng thái 
 * b.2: Giả sử promise có trạng thái reject nhưng không tìm thấy catch -> chương 
 * trình báo lỗi 
 * b.3: resolve() , reject() chỉ nhận 1 tham số 
 * 3. Promise chain
 * a) Tính chuỗi của resolve 
 * Khi một Promise được resolve, bạn có thể sử dụng .then() để thực thi một chuỗi các thao tác. Mỗi .then() trong chuỗi sẽ nhận kết quả từ .resolve() hoặc từ kết quả của .then() trước đó.
Nếu bất kỳ .then() nào trả về một Promise mới, chuỗi sẽ đợi Promise đó hoàn thành trước khi tiếp tục.
 * b) Tính chuỗi của reject 
 * reject hoạt động khác một chút. Khi một Promise bị reject, nó sẽ chuyển thẳng đến phương thức .catch() đầu tiên trong chuỗi để xử lý lỗi, bỏ qua bất kỳ .then() nào chưa được xử lý.
   Sau khi catch xử lý xong lỗi, bạn có thể tiếp tục chuỗi bằng cách sử dụng .then().
 * 
 */