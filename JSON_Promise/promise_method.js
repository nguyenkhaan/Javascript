/*
var promise = Promise.reject('success'); 
promise
    .then(function(data) {
        console.log(data); 
    })
    .then(function() {
        console.log(2); 
    })
    .catch(function () {
        console.log(3);   //co loi thi dung lai, khong mco loi thi bo qua 
    })
    .then(function () {
        console.log(4); //chay tiep tuc cho toi khi gap loi 
    })
    .catch(function () {  //bo qua vi luc nay promise da coi la khong co loi nua 
        console.log(5); 
    })
    .then(function() {
        console.log(6); 
    })
*/ 
var promise1 = new Promise(
    function(resolve,reject) {
        resolve(789)  
    }
)
var promise2 = new Promise(
    function(resolve,reject) {
        resolve(111222); 
    }
)
promise1 
    .then(function(data) {
        //
    }) 
var promise = Promise.all([promise1 , promise2]); 
promise
    .then(function(k1) {
        console.log(k1); 
    })