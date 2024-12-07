//Promise.reject 
//Promise.reject 
//Promise.all 
//Thư viện: 
var promise1 = Promise.resolve('Thanh cong');
var promise2 = Promise.reject('Thanh cong lam'); //No luon luon bat loi truoc 
Promise.all([promise1 , promise2]) 
    .then(function(mess) {
        console.log(mess) 
    })
    .catch(function(res) {
        console.log(res) 
    })