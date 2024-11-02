/**
 * 1. What is class 
 * - Classess in Js allows us to create a blueprint 
 * -> We can create instance based on that blue print 
 * It is different from traditional classes 
 * 
 */
//1. class declaration 
class Person
{
    constructor(name, birthYear, gender) //Every class has a special function constructor 
    {
        this.name = name; 
        this.birthYear = birthYear; 
        this.gender = gender; 
        
    }
    calcAge() {
        return (2024 - this.birthYear); 
    } //method nay tu dong them vao prototype -> khong can su dung this
}
let john = new Person('John',2006,'Male'); 
console.log(john); 
let myObject = {
    hello() {
        console.log('Hello'); 
    }
}
myObject.hello(); 