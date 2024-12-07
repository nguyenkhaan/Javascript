const student = {
    name: "angelica", 
    age : 18, 
    position: "student"
}; 
const mary = Object.create(student); 
console.log(Object.keys(mary)); 