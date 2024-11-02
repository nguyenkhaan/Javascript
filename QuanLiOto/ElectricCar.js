const Car = require('./Car.js')
class ElectricCar extends Car 
{
    constructor(make,model,year,color,km, isRunning,battery)  
    {
        super(make,model,year,color,km, isRunning); 
        this.battery = battery; 
    }
    charge(amout) 
    {
        this.battery = Math.min(100,this.battery + amout);  
    }
    drive(len) 
    {
        if (this.battery < len) console.log('Khong chay duoc'); 
        else{
            this.battery -= len;
            this.km += len;  
        }
    }
}
module.exports = ElectricCar; 