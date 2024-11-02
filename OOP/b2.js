function Person(name,age) 
{
    this.name = name; 
    this.age = age; 
    this.greet = function() 
    {
        console.log('Hello'); 
    }
}
function Student(name,age,major,study) 
{
    Person.call(this,name,age); 
    this.major = major; 
    this.stduy = study; 
}
Student.prototype = Object.create(Person.prototype);  
Student.prototype.constructor = Student; 
let user = new Student('Minh',18,'KTPM','4.0'); //thuc hien ke thua 
console.log(user); 