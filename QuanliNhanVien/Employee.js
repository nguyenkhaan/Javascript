class Empoloyee 
{
    constructor(name,position,salary)   //Phai co ten la constructor 
    {
        this.name = name; 
        this.position = position; 
        this.salary = salary; 
    }
    get getDetail() 
    {
        return {
            name: this.name, 
            position: this.position, 
            salary: this.salary 
        }
    }
    get getAnnualSalary() {
        return this.salary; 
    }
}
module.exports = Empoloyee; 