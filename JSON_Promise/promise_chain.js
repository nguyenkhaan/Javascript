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
 * 
 */