const Car = require('./Car.js')
/**
 * 1. camelCase: Javascript 
 * 2. PascalCase: C++ 
 * 3. snake_case: Python, C++ 
 * 4. kebab-case: heading-1 (HTML, CSS) 
 * 5. Biến boolean: có thêm tiền tố is phía trước
 * 6. const: đặng UPPER_CASE const PI = 3.14 
 * 7. Class, struct: đặt viết hoa chữ cái đầu 
 * Ưu tiên tiếng Anh 
 */
class GasCar extends Car 
{
    constructor(make, model, year, color, km, isRunning,fuel)
    {
        super(make, model, year, color, km, isRunning); 
        this.fuel = fuel; 
    }
    charge(amout) 
    {
        this.fuel = Math.min(100,this.fuel(amout)); 
    }
    drive(len) 
    {
        if (len > this.fuel) console.log('Khong chay duoc'); 
        else 
        {
            this.fuel -= len; 
            this.km += len; 
        }
    }
}
module.exports = GasCar; 