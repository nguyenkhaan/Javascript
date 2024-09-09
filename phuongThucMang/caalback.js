courses = [
    {
        id : 1, 
        name: 'Java', 
        coin: 0 
    }, 
    {
        id : 2, 
        name: 'HTML,CSS',
        coin: 0 
    }, 
    {
        id : 3,
        name: 'C++', 
        coin: 250 
    }, 
    {
        id : 4, 
        name: 'Ruby', 
        coin : 400 
    }
]; 
const myFunction = function(num,index,) 
{
    console.log(num,' ',index); //Javascript se tu dong truyen tham so vao nen ta khong can them tham so 
}
/**
 * forEach: duyệt qua các phần tử của mảng (undefined) 
 * every(): trả về kiểu bool tất cả gtri trong mảng thỏa mãn 1 cái gì đó 
 * some(): chỉ cần 1 giá trị mảng thỏa mãn là được
 * find(): tìm kiếm và trả về 1 phần tử thỏa mãn 1 giá trị nào đó. Nếu không có thì là undefined 
 * filter(): trả về 1 mảng các phần tử thỏa điều kiện gì đó 
 * map(): thực hiện 1 loạt thao tác với các phần tử trong mảng đó -> không cần thực hiện gán lại hay return giá trị 
 * reduce(): nhận về 1 kết quả duy nhất 
 * 
*/
var he = courses.forEach(myFunction); //tra ve kieu du lieu undefined 
var isFree = courses.some(function(course) {
    return (course.coin == 0); 
}) //tra ve kieu gia tri boolean 
var language = courses.find(function(course) {
    return (course.name == 'C'); 
})
var myFreeCourse = courses.filter(function(course) {
    return (course.coin == 0); 
})
courses.map(x => (x.coin +100)); //khong can thuc hien phep gan cung duoc 
console.log(courses);  
var i = 0; 
//Lan chay dau tien thi accumaltor se duoc gan cho gia tri khoi tao 
//Trong day return cai gi thi no se lay cai do 
var totalCoins = courses.reduce(function(acc,current){
    return (acc + current.coin); 
},0);  
console.log(totalCoins); 