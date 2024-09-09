//Xư lí bài toán này bằng mảng 
const input = require('prompt-sync')(); 
let [s1,s2] = input('Nhap hai so: ').split(' '); 
let n1 = s1.length; 
let n2 = s2.length; 
for (let i=n1; i<Math.max(n1,n2); i++) s1 = '0' + s1; 
for (let i = n2; i<Math.max(n1,n2); i++) s2 = '0' + s2; 
let result = Array(s1.length+1).fill(0); 
for (let i = s1.length-1; i>=0; i--) 
{
    let temp = Number(s1[i]) + Number(s2[i]) + result[i+1]; 
    result[i+1] = temp % 10; 
    result[i] = Math.trunc(temp/10); 
}
console.log(result); 