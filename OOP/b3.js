//Viet chuong trinh tao lop person gom co name, age va birthYear, ke thua no bang lop
//Robot bo sung them thuoc titnh do thong minh 
function Human(name,age,birthYear) 
{
    this.name = name; 
    this.age = age; 
    this.birthYear = birthYear; 
}
function Robot(name,age,birthYear,intel)  
{
    Human.call(this,name,age,birthYear); 
    this.calculateAge = function() {
        return (2024 - this.birthYear); 
    }
    this.intel = intel; 
}
Robot.prototype = Object.create(Human.prototype); //Thuc hien viec ke thua 
Robot.prototype.constructor = Robot; //Sau khi thuc hien ke thua thi constructor bi tro toi Human (goi ham Call) 
let a = new Robot('Alice',19,2022,10); 
const res = a.calculateAge(); 
console.log(res); 