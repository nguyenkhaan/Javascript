const Employee = require('./Employee'); 
class Manager extends Employee 
{
    constructor(name,position,salary,department) 
    {
        super(name,position,salary); 
        this.department = department;
    }
    setDetail(name,position,salary,department) 
    {
        [this.name , this.position , this.salary , this.department] 
        = [name,position,salary,department]
    }
    
}
module.exports = Manager; 