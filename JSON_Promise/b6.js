var promise = new Promise(
    function(resolve) 
    {
        resolve(123); 
    }
)
promise
    .then(function(data) {
        console.log(data); 
    })
    .then(function(data) {
        console.log(data); 
    }) 