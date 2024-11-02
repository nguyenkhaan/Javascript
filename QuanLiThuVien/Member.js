const Book = require('./Books.js'); 
class Member 
{
    constructor(name,memberID,borrowBooks) 
    {
        this.name = name; 
        this.memberID = memberID; 
        this.books = []; 
    }
    borrowBooks(book) 
    {
        if (book.isAvailable) {
            this.books.push(book); 
            book.borrow(); 
        }
        else console.log('Da duoc muon'); 
    }
    giveBackBooks(book) 
    {
        const index = this.books.indexOf(book); 
        if (index == -1) console.log('Khong co sach'); 
        else this.books.splice(index,1); 
    }
    allBooks() 
    {
        return (this.books); 
    }
}
module.exports = Member; 