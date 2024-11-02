var box1 = document.querySelector('.box1'); 
console.log(box1); 
//thuc hien thay doi tieu de nhap nhay lien tuc 
var headingNode = document.querySelector('h1'); 
setInterval(() => {
    headingNode.classList.toggle('red'); 
},1000);
var para = document.querySelectorAll('p'); 
para.forEach((x) => {
    x.style.color = 'blue'; 
}) 