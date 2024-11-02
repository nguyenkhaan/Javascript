var form = document.getElementById('myForm'); 
var user,pass,gender,member; 
form.addEventListener('submit',function(e) {
    e.preventDefault(); 
    user = this['username'].value; 
    pass = this['password'].value; 
    var aNode = this.elements['radio-1']; 
    for (let i = 0; i < aNode.length; ++i) {
        if (aNode[i].checked) gender = aNode[i].id; 
    }
    member = this['mySelect'].value; 
    //
    console.log(user); 
    console.log(pass); 
    console.log(gender); 
    console.log(member); 
})
