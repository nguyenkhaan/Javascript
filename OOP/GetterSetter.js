//getter, setter là các accessor property.  
//Dùng để truy cập và thiết đặt dữ liệu 
//Nhìn thì giống hàm nhưng thực ra là 1 property 
class Person 
{
    constructor(name,age) 
    {
        this.name = name; 
        this.age = age; 
    }
    get getName() 
    {
        return 'Mr' + this.name; 
    }
    set setName(newName) 
    {
        this.name = newName; 
    }
}
let john = new Person('john',18); 
john.setName('Hello'); 