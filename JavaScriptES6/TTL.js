function hightlight([first,...string],...values) //su dung rest operator de mang hoa cac tham so 
{
    var res = values.reduce(  //su dung phuong thuc reduce lap qua cai do 
        (acc,curr) => [...acc,`<span>${curr}</span>`,string.shift()],
        //su dung spread de tach mang ra lai 
        [first]
    )
    return res //thu duoc mang ket qua 
}
var course = 'Javascript' 
var brand = 'F8' 
const ans = hightlight `Hoc lap trinh ${course} tai ${brand}!!!` //Tagged Template Literal 
console.log(ans) 