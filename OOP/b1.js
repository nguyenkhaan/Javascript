//Tao mot function constructor animal, co thuoc tinh name va thuc an, sau do khoi tao mot function construct 
//dog ke thua voi thuoc tinh moi la age va method say Hello 
function Animal(name,food) 
{
    this.name = name; 
    this.food = food; 
}
function Dog(...args) 
{
    Animal.call(this,args[0],args[1]); //name and food transmisting 
    this.age = args[2]; 
    this.sayHello = function() 
    {
        console.log('Hello'); 
    }
}
Dog.prototype = Object.create(Animal.prototype);  
Dog.prototype.constructor = Dog; 
const readLine = require('prompt-sync')(); 
const pubby = new Dog('A','Pate',18); 
pubby.sayHello(); 