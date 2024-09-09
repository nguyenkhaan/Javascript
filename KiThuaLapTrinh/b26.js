/**
 * Hiểu hơn về các kiến thức đã học 
 * Có 6 giá trị mà javascript trả về false 
 * 0 
 * ''
 * null
 * undefined
 * NaN: là kiểu number nhưng gặp trục trặc về toán học 
 * false 
 */
var a = 1; 
var b = '1';  

var result = (a!==b); 
//Cái || khi gặp 1 1 trong 6 giá trị false thì nó pass qua, còn cái && thì dừng lại 
//Toan tu logic khong tra ve boolean 
//Thang false kia chinh la ket qua cua ve so 2
var b = parseInt(b);
console.log(typeof b)