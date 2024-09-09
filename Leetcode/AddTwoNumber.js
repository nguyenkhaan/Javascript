/**
 * Từ khóa new: dùng để tạo ra một instance thể hiện cho một đối tượng 
 * let ten_bien = new ten_doi_tuong 
 */
function LinkNode(val,next = null)  //Cho phep gan kieu nay nua nhe 
{
    this.val = val; 
    this.next = next; 
}
function addTwoNumber(l1, l2) 
{
    const l = new LinkNode(0); //tao ra mot instance (the hien) cho mot doi tuong 
    let head = l; //do kieu du lieu la object nen day la mot bien tham chieu 
    let rem = 0; 
    while (l1!==null || l2!==null) {
        let x = (l1 !== null)?l1.val:0; 
        let y = (l2 !== null)?l2.val:0; //Toan tu ba ngoi 
        let sum = x + y + rem; 
        rem = Math.floor(sum / 10); 
        head.next = new LinkNode(sum % 10); //Tao them mot instance moi, gan no vao bien next, instance do duoc cap truoc gia tri value 
        head = head.next; 
        if (l1 !== null) l1 = l1.next; 
        if (l2 !== null) l2 = l2.next;  //Chuyen sang instance tiep theo bang next 
    }
    if (rem > 0) head.next = new LinkNode(rem); 
    return l.next; 
}
var l1 = new LinkNode(3,new LinkNode(6,new LinkNode(4))); 
var l2 = new LinkNode(1,new LinkNode(2,new LinkNode(7))); 
let res = addTwoNumber(l1,l2); 
let a = []; 
while (res !== null) 
{
    a.push(res.val); 
    res = res.next; 
}
console.log(a); 


