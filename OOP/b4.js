//Tao ke thua tu lop Animal thanh Dog, cat va Lion. Moi con deu co name va species 
function Animal(name, species) 
{
    this.name = name; 
    this.species = species; 
}
function Dog(...args) 
{
    Animal.call(this,args[0],args[1]); 
    this.name = args[2]; 
    this.food = args[3]; 
}
Dog.prototype = Object.create(Animal.prototype); 
//Doi tuong moi luu vao Dog.prototype va cai prototype cua no luu vao prototpe của Dog.prototype 
Dog.prototype.constructor = Dog; 
function Lion(...args) 
{
    Animal.call(this,args[0],args[1]); 
    this.food = args[3]; 
    this.name = args[2]; 
}
Lion.prototype = Object.create(Animal.prototype); 
Lion.prototype.constructor = Lion; 
function Cat(...args) 
{
    Animal.call(this,args[0],args[1]); 
    this.food = args[3]; 
    this.name = args[2]; 
}
Cat.prototype = Object.create(Animal.prototype); 
Cat.prototype.constructor = Cat; 
function Bug(...args) 
{
    Animal.call(this,args[0],args[1]); 
    this.name = args[2]; 
    this.food = args[3]; 
}
Bug.prototype = Object.create(Animal.prototype); 
Bug.prototype.constructor = Bug;  
function Pig(...args) 
{
    Animal.call(this,args[0],args[1]); 
    this.name = args[2]; 
    this.food = args[3]; 
}
Pig.prototype = Object.create(Animal.create); 
Pig.prototype.constructor = Pig; 
Pig.prototype.sound = function() 
{
    console.log('EEE'); 
}
Cat.prototype.sound = function() 
{
    console.log('M'); 
}
Dog.prototype.sound = function() 
{
    console.log('G'); 
}
Lion.prototype.sound = function() 
{
    console.log('Grrrr'); 
}
Bug.prototype.sound = function() 
{
    console.log('None'); 
}