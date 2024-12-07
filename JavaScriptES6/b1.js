function sum(fixed = 0, ...args) 
{
    let total = 0; 
    for (let i of args) total += i; 
    return total + fixed; 
}
console.log(sum(1,2,3,4)) 