class Books 
{
    constructor(title,author,ISBN, isAvailable) 
    {
        this.title = title; 
        this.author = author; 
        this.ISBN = ISBN;  //thuoc tinh (properties) 
        this.isAvailable = isAvailable; 
    }
    borrow() //method 
    {
        this.isAvailable = 0; 
    }
    giveBack() 
    {
        this.isAvailable = 1; 
    }
} 
module.exports = Books; 