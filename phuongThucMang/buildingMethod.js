Array.prototype.forEach2 = function(callback) 
{
    for (var index = 0; index < this.length; ++index) 
    {
        callback(this[index],index,this); 
    }
}
Array.prototype.map2 = function(callback) 
{
    var a = []; 
    for (var index = 0; index < this.length; ++index) 
    {
        let m = callback(this[index],index,this);  //goi ham callback duoc truyen khi goi phuong thuc 
        a.push(m); //khi goi ham thi cai callback nay chua co chay ma chi coi la 1 tham so (vua la ham nua ^^)
    }
    return a; 
}
Array.prototype.every2 = function(callback) 
{
    for (var index = 0; index<this.length; ++index) 
    {
        if (!callback(this[index],index,this)) return 0; 
    }
    return true; 
}
Array.prototype.filter2 = function(callback) 
{
    //loc ra mot mang thoa mang dieu kien 
    var a = []; 
    for (var index = 0; index<this.length; ++index) 
    {
        if (callback(this[index],index,this)) a.push(this[index]); 
    }
    return a; 
}
Array.prototype.some2 = function(callback) 
{
    var a = 1; 
    for (let index = 0; index < this.length; ++index) 
    {
        if (callback(this[index],index,this)) return 1; 
    }
    return 0; 
}
Array.prototype.double = function() 
{
    var a = []; 
    for (var i of this) a.push(i * 2); 
    return a; 
}
var a = [1,2,3,4]; 
a.forEach2(hello); 
//Hay tuong tuong khi ta truyen tham so la ham callback thi trong cai phuong thuc dinh 
//nghĩa, tham so do no co doan ma tuong ung roi 
