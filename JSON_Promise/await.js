function getPromise() 
{
    return new Promise(
        function(resolve) 
        {
            resolve(1);  
        }
    )
}
getPromise() 
    .then(data) 
    {
        console.log(data); 
    }