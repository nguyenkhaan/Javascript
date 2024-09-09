const prompt = require("prompt-sync")(); 
/**
 * Kiểu dữ liệu nguyên thủy - Primitive Data
 * Moi khi gan lai gia tri thi tao ra mot vung nho khac
 * Number
 * String 
 * Boolean 
 * Undefined
 * Null
 * Symbol 
 * 2. Kiểu dữ liệu phức tạp - Complex Data
 * Function 
 * Object: object, array
 * 
 */
var a = 1; //Kieu du lieu Number 
var b = 2;
var c = 1.5; 
//string type 
var fullName = "Son \' Dang"; //bao quanh la nhay don hoac nhay kep
console.log(fullName); 
//boolean type 
var isSuccess = false; 
//undefined 
var tuoi; 
//null 
var isNull = null; //nothing 
//symbol 
var id = Symbol('id'); 
console.log(id); 
//Function 
var myFunction = function() {
    console.log('Xin chao cac ban'); 
}; 
var myObject = {
    name: 'Son Dang',
    tuoi: 18,
    dia_chi: 'Ha Noi' 
}; 