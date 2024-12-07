class node 
{
    constructor(x) 
    {
        this.data = x; 
        this.next = null; //trong js thi null chi la 1 kieu du lieu chu cha lienq uan gi con tro sat 
    }
}
var head = null; 
function makeNode(x) 
{
    if (head === null) 
    {
        var p = new node(x); 
        head = p; 
    }
    else insertNode(head,x); 
}
function insertNode(head,x) 
{
    if (head.next === null) {
        let p = new node(x); 
        head.next = p; 
    } 
    else insertNode(head.next,x); 
}
function inNode(head) 
{
    if (head != null) {
        console.log(head.data); 
        inNode(head.next); 
    }
}
makeNode(1); 
makeNode(2); 
makeNode(3); 
makeNode(4); 
makeNode(5); 
inNode(head); 