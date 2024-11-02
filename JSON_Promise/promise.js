var promise = new Promise(
    function(resolve , reject) 
    {
        resolve(); 
    }
)
promise
.then(function() {
    setTimeout(function() {
        console.log(1); 
    },2000); //dinh nghia cac ham callback 
    return 1; 
})
.then(function(data) {
    console.log(data); 
    return 2; 
})
.then(function(data) {
    console.log(data); 
    return 3; 
})
.then(function(data) {
    console.log(data); 
    return 4; 
})
.catch(function() {
    console.log('That bai'); 
})
.finally(function(data) {
    console.log('Done'); 
})