class node 
{
    constructor(x) 
    {
        this.data = x; 
        this.next = null; //con tro gia 
    }
}
var head = null; 
function makeNode(x) 
{
    if (head === null) {
        var p = new node(x); 
        head = p; 
    }
    else insertNode(head,x); 
}
function insertNode(head,x) 
{
    if (head.next === null) {
        var p = new node(x); 
        head.next = p; 
    } 
    else insertNode(head.next,x); 
}
function inNode(head) 
{
    if (head != null) 
    {
        console.log(head.data); 
        inNode(head.next); 
    }
}
const readLine = require('prompt-sync')(); 
function menu() 
{
    while (true) 
    {
        console.log('1. Them node '); 
        console.log('2. in node'); 
        var option = Number(readLine()); 
        if (option == 1) 
        {
            var x = Number(readLine()); 
            makeNode(x); 
        } 
        if (option == 2) inNode(head); 
        if (!option) break; 
    }
}
menu(); 