const prompt = require('prompt-sync')(); 
let input = prompt('Nhap 3 so: '); 
let [a,b,c] = input.split(' ').map(item=>parseInt(item.trim())); 
let arr = [a,b,c]; 
let swap = function(arr,id1,id2) 
{
    let t = arr[id1];
    arr[id1] = arr[id2]; 
    arr[id2] = t; 
}; 
if (arr[0]<arr[1]) swap(arr,0,1); 
if (arr[0]<arr[2]) swap(arr,0,2);
if (arr[1]<arr[2]) swap(arr,1,2); 
[a,b,c] = arr; 
console.log('Sau khi hoan doi: ',a,b,c);