var languages = ['Javascript','Ruby','PHP']; 
//toString(): chuyen sang kieu du lieu String 
//console.log(languages.toString()); 
//join: cung chuyen sang string nhung co the thay doi dau ngan cach 
//console.log(languages.join(' ')); 
//pop(): xoa di phan tu cuoi mang va tra lai phan tu da xoa 
//console.log(languages.pop()); 
//console.log(languages); //-> Chi can goi la se tu dong xu li, khong can gan nhu chuoi 
//push(x): them phan tu vao cuoi mang va tra ve do dai moi cua mang 
//languages.push('Dart'); 
//console.log(languages.push('Java','Dart')); 
//shift(x): xóa phần tử đầu mảng và trả về phần tử đã xóa 
// **console.log(languages.shift()); 
//unshift(x): thêm phần tử vào đầu mảng, và trả về độ dài mới của mảng 
//console.log(languages.unshift('HTML')); 
//splice(num_pointer,delete_count,string)
languages.splice(1,1,'Dart'); 
console.log(languages); //->Chuc nang thay doi sinh vien 
//concat: nối được array 
var languages2 = ['HTML','CSS']; 
languages = languages + languages2
console.log(languages); 
//slice(a,b): cat lay mot vai element cua mang 
