function addTask(a,s) {
    a.push(s); 
    console.log('Them thanh cong...'); 
}
function removeTask(a,i) {
    if (a.length == 0) {
        console.log('khong co gia tri de xoa...'); 
        return; 
    } 
    a.splice(i - 1,1); 
    console.log('Da xoa thanh cong: '); 
}
function viewTask(a) 
{
    if (a.length == 0)
    console.log('Cac task cua ban: '); 
    for (let i = 0; i < a.length; ++i) {
        console.log(i + 1,' ',a[i]); 
    }
}

module.exports = {addTask , removeTask , viewTask}; 