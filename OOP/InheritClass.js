/** INHERIT CLASS
 * 1. Kế thừa Class 
 * - Cú pháp: class B extends A: class B kế thừa từ class A 
 * -> B có tất cả phương thức, thuộc tính của class A. 
 * - Chú ý: khi dùng extends thì constructor cũng được gán lại rồi 
 * a) Ghi đè: 
 * - Khi class con có method / property giống class cha thì instance tạo ra sẽ sử dụng 
 * giá trị method / property của class con (ghi đè) 
 * VD: 
 * 
 * 
 * b) super() 
 * Cách 1: Dùng trong constructor để kế thừa constructor của class cha 
 * VD: 
 * 
 * Cách 2: super.methodName(): gọi lại phương thức của class cha 
 * Chú ý: Dù cho có ghi đè thì vẫn gọi được 
 * 2. Import class 
 * 
 */

class Person 
{
    constructor(name,birthYear,gender) 
    {
        this.name = name; 
        this.birthYear = birthYear; 
        this.gender = gender; 
    }
    hello() {
        console.log('Hello world'); 
    }
    
}
class Employee extends Person 
{
    constructor(name,birthYear,gender,salary,ID) 
    {
        super(name,birthYear,gender); //ke thu constructor trong class, 
        this.salary = salary; 
        this.ID = ID; 
    }
}
let user = new Employee('john',1990,'male',1000,'19xxx'); 
user.hello(); 