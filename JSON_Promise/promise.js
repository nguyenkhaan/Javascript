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
///////////////////////////////////////////////////////////////////////////////////////////////////
function getPromise() 
{
    return new Promise( 
        function(resolve) 
        {
            const data = "Day la du lieu"; 
            resolve(data) //trong ham thi dung cach nay de truyen du lieu 
        }
    )
}
getPromise() 
    .then(function(data) {
        console.log(data); 
        return data 
    }) 
    .then(function(data) {  //khong tra ve Promise ma chi la kieu du lieu binh thuong 
        console.log(data) 
    })