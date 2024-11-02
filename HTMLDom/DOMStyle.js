var boxElement = document.getElementsByClassName('box');  
boxElement[0].style.width = '100px'; 
boxElement[0].style.height = '100px'; 
boxElement[0].style.backgroundColor = 'Blue'; 
Object.assign(boxElement.style , {
    width : '200px',
    height: '100px',
    backroundColor: 'green', 
}); 
console.log(boxElement.style.backgroundColor); 