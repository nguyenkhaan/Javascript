
function Person(name,gender,birthYear) 
{
    this.name = name; 
    this.gender = gender; 
    this.birthYear = birthYear; 
}
Person.prototype.calAge = (x) => {
    return 2024 - x; //ham mui ten khong co this rieng ma thuc hien ke thua this tu blockscope tao ra no 
}
Person.prototype.calAge1 = function() {
    return (2024 - this.birthYear); 
}
//Tao them mot lop hoc sinh ke thua tu Person 
function Student(name,gender,birthYear,ID,gpa) 
{
    Person.call(this,name,gender,birthYear); 
    this.ID = ID; 
    this.gpa = gpa; 
}
//KE thu prototype 
Student.prototype = Object.create(Person.prototype); 
Student.prototype.constructor = Student; 
let mark = new Student('Mark','male',2006,24520059,4); 
console.log(mark.calAge1()); 

