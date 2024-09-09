const input = require('prompt-sync')(); 
let [s1,s2] = input('Nhap hai so: ').split(' '); 
let result = Array(s1.length + s2.length+1).fill(0); 
for (var i = s1.length-1; i>=0; i--) 
{
    for (let j = s2.length-1; j>=0; j--)
    {
        let temp = Number(s2[j])*Number(s1[i]) + result[i+j+2]; 
        result[i+j+2] = temp % 10; 
        result[i+j+1] += Math.trunc(temp/10); 
    }
}
console.log(result); 