greet(function() {  
    return 1; 
})
function greet(a) 
{
    console.log(a()); 
}
/**LUỒNG CHẠY CỦA CHƯƠNG TRÌNH 
 * 1. Hàm greet(a) được khai báo, lúc này chưa có gì thực thi. Kể cả a() cũng chưa thực thi 
 * 2. Hàm function() {} được xử lí trước, nhưng chưa được thực thi 
 * 3. Gọi hàm a() -> return 1 -> console.log(1); 
 */
function hello(a) 
{
    return 1;
}
console.log(hello()); 