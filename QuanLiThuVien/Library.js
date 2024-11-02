const Member = require('./Member.js'); 
const Books = require('./Books.js'); 
class Library
{
    constructor() 
    {
        this.books = []; 
        this.members = []; 
    }
    addBook(book) 
    {
        this.books.push(book); 
    }
    removeBook(book) 
    {
        const index = this.books.indexOf(book); 
        if (index == -1) console.log('No data...'); 
        else this.books.splice(index,1);  
    }
    addMember(member) 
    {
        this.members.push(member); 
    }
    removeMember(member) 
    {
        const index = this.members.indexOf(member); 
        if (index == -1) console.log('No data...'); 
        else this.members.splice(index,1); 
    }
    findBookByTitle(title) 
    {
        let res = null;
        for (let i of this.books) 
        {
            if (i.title == title) {
                res = i;  
                break; 
            }
        }
        if (res != null) console.log(res); 
        else console.log('No data...'); 
    }
    findMemberByID(id) 
    {
        let res = null; 
        for (let i of this.members) 
        {
            if (i.ID == id) {
                res = i; 
                break; 
            }
        }
        if (res != null) console.log(res); 
        else console.log('No data...'); 
    }
}
module.exports = Library; 