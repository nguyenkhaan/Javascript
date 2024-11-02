class Player 
{
    constructor(name,position,number,goals) 
    {
        this.name = name; 
        this.position = position; 
        this.number = number; 
        this.goals = goals; 
    }
    score() 
    {
        this.goals++; 
    }
    displayInfo() 
    {
        console.log('Name: ',this.name); 
        console.log('Position: ',this.position); 
        console.log('Number: ',this.number); 
        console.log('Goal: ',this.goals); 
    }
}   
module.exports = Player; 