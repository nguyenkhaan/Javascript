const hello = function(a,b) 
{
    console.log(a,b); 
}
function applyFunction(hello) 
{
    let a = 10, b = 5; 
    hello(a,b); 
}
applyFunction(hello); 
/**
 * TRUYỀN VÀ GỌI HÀM CALLBACK 
 * 1. Vấn đề gọi hàm callback 
 * - Ta có thể gọi hàm callback đã truyền vào 
 * Cú pháp: 
 * function callback(a,b) 
 * {
 *      console.log(a,b); 
 * }
 * function applh(callback) 
 * {
 *      let a = 5, b = 10; 
 *      callback(a,b);  //Thuc hien goi ham callback 
 * } -> In ra gia tri a,b (a,b la tham so) 
 * aplly(callback) 
 * Chú ý: Với các method (forEach,...) ta có thể truyền trực tiếp code(1) và 
 * method -> định nghĩa method -> cho callback chạy trong định nghĩa 
 */