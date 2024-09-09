//su dung ham console.log n so tang dan tu 1 toi 1000
//Su dung vong lap for_in 
var course = ['Java','PHP','Ruby']; 
for (var i in course) console.log(i); 
//Key cua array la index 
var myString = 'Hello'; 
for (var ch in myString) console.log(ch); 
//Su dng for_of: lấy ra các phần tử của mảng, 
var myFrined = ['Peter','Jack','Rudi'] 
for (var value of myFrined) console.log(value); 
var oldFriend = 'Kam' 
for (var ch of oldFriend) console.log(ch); 
var car = {
    name: 'Tesla', 
    year: 1998
}
//Su dung object -> Loc qua 1 mang
for (var value of Object.values(car)) console.log(value); 
//Lay ra key cua mang 