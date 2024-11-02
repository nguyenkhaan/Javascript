class Car 
{
    constructor(name,brand,color,id) 
    {
        this.name = name; this.brand = brand; this.color = color; this.id = id; 
    }
    get getName()    
    { 
        return this.name; 
    } 
    set setName(val) 
    { 
        this.name = val; 
    } 
    get getBrand()   
    { 
        return this.brand; 
    } 
    set setBrand(val) 
    { 
        this.brand = val; 
    } 
    get getColor() 
    { 
        return this.color; 
    } 
    set setColor(val) 
    { 
        this.color = val; 
    } 
    get getID() 
    {
        return (this.id); 
    }
    set setID(val) 
    {
        this.id = val; 
    }
}
const readLine = require('prompt-sync')(); 
function solve() 
{
    const a = readLine('Enter name: '); 
    const b = readLine('Enter brand: '); 
    const c = readLine('Enter color: '); 
    const d = readLine('Enter id: '); 
    let myCar = new Car(a,b,c,d); 
    const screen1 = function() 
    {
        console.log('1. Name: '); 
        console.log('2. Brand: '); 
        console.log('3. Color: '); 
        console.log('4. ID: '); 
    }
    screen1(); 
    const screen2 = function() 
    {
        console.log('1. Get: '); 
        console.log('2. Edit: '); 
    }
    const screenSelection = function() 
    {
        const choice = Number(readLine()); 
        return choice; 
    }
    const choice1 = screenSelection(); 
    const editScreenSelection = function() 
    {
        const choice = Number(readLine()); 
        return choice; 
    }
    screen2(); 
    const choice2 = editScreenSelection(); 
    if (choice2 == 1) 
    {
        switch (choice1) 
        {
            case 1: console.log(myCar.getName);  break; 
            case 2: console.log(myCar.getBrand); break; 
            case 3: console.log(myCar.getColor); break; 
            default: console.log(myCar.getID);   break; 
        }
    }
    else 
    {
        const x = readLine(); 
        switch (choice1) 
        {
            case 1: myCar.setName(x);  break; 
            case 2: myCar.setBrand(x); break; 
            case 3: myCar.setColor(x); break; 
            default: myCar.setID(x);   break; 
        }
    }
}
solve(); 