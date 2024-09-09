/** 
 * OBJECT: 
 * 1. Khai báo object 
 * Khai báo: var ten_bien = {key : value} 
 * - Mỗi key chỉ tồn tại 1 lần. 
 * - Value: có thể là Number, string, array, object, function... 
 * - Thêm 1 cặp key : value ----> object.<key mới> = <value>; 
 * - Xóa 1 cặp key : value ----> delete object.<key>; 
 * - Chú ý: ta có thể dùng object['ten key'] để truy cập key : value tướng ứng 
 * 2. Object constructor 
 * function User(firstName,lastName,avatar) 
 * {
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.avatar = avatar; 
    }
    var author = new User('Son','Dan','Ava'); -> tạo ra một object 
    Có thê tạo thêm key mới: author.title = 'Xin chao cac ban' 
    author.firstName = hello (sưa key) 
 */
/*
var myInfo = {
    name: 'Nguyen Kha An', 
    age: 18, 
    addres: 'Ha Noi Viet Nam', 
    getName: function(firstName,lastName,age) {
        return this.name; //this la tuong trung cho cai ham nay 
    } 
}; 
myInfo.email= 'nguyenkhaan2006@gmail.com'; 
delete myInfo.age;  
console.log(myInfo.getName()); 
*/
var mira = { 
    name: 'Mira', age:18 
} 
console.log(this.name); 