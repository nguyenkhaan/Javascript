//Thuc hanh lay 1 element trong div của HTML, gán thêm thuộc tính title cho thẻ đó 
//In ra thuộc tính của thẻ đó 
//In ra innerText của thẻ đó 
var headingNode = document.querySelector('div h1'); 

console.log(para); 
headingNode.title = "Hello New World"; 
headingNode.setAttribute('hello','xinchao'); 
console.log(headingNode.title);  //Toan tu . chi dung cho cac Attribute thuan chung
console.log(headingNode.innerText); 