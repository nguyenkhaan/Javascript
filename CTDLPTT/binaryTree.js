//Không thể tạo 1 instance cua chính class đó bên trong class đ
//Khi no da la 1 instance thi co the 
class Node 
{
    constructor(data) 
    {
        this.left = null; 
        this.right = null; 
        this.data = data; 
    }
}
var t = null; 
function addNode(x) 
{
    if (t == null) 
    {
        var p = new Node(x); 
        console.log(p); 
        t = p;  //o day do p la global varriable cho nen no co the tham chieu 
    }
    else insertNode(t,x); 
}
function insertNode(t,x) 
{
    if (t.data > x) 
    {
        var p = new Node(x); 
        if (t.left === null) t.left = p; //thay doi cac thanh phan nam torng bien co the tham chieu la tham chieu 
        else insertNode(t.left,x); 
    }
    if (t.data < x) 
    {
        var p = new Node(x); 
        if (t.right === null) t.right = p; 
        else insertNode(t.right,x); 
    }
}
function nlr(t) 
{
    if (t != null) 
    {
    console.log(t.data); 
    nlr(t.left); 
    nlr(t.right); 
    } 
}
addNode(1); 
addNode(2); 
addNode(3); 
nlr(t); 