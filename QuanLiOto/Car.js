class Car 
{
    constructor(make, model, year, color, km, isRunning) 
    {
        this.make = make; 
        this.model = model; 
        this.year = year; 
        this.color = color; 
        this.km = km; 
        this.isRunning = isRunning; 
    }
    start() 
    {
        this.isRunning = true; 
    }
    stop() 
    {
        this.isRunning = false; 
    }
    drive(len) 
    {
        if (!this.isRunning) {
            console.log('Xe chua duoc khoi dong'); 
        }
        else this.km += len;  
    }
}
module.exports = Car; 