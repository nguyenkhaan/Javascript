/**
 * Lấy dữ liệu từ phía Backend trả về 
 * API (url)- cổng giao tiếp giữa các phần mềm 
 * Backend (storage) -> API -> fetch -> JSON -> JSON.parse -> Javascript type -> Render 
 * Phuong thuc await / assync 
 */
var postAPI = 'https://jsonplaceholder.typicode.com/posts'; 
function getIDAndBody(data) 
{
    var res = data.map(function(curr) {
        return {
            id: curr.id, 
            body: curr.body 
        }
    })
    return res; 
}
fetch(postAPI)  
    .then(function(stream) {
        return stream.json() 
    })
    .then(function(data) {
        var res = getIDAndBody(data); 
        console.log(res); 
        
    })
    .catch(function(data) {
        console.log(data instanceof Promise); 
    })