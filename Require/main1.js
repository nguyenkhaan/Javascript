const {addTask , removeTask , viewTask} = require('./toDoList');
const readLine = require('prompt-sync')();  
var choice = 1; 
function showScreen() 
{
    console.log('-------------------------------------------------------------'); 
    console.log('1. Add Task'); 
    console.log('2. Remove Task'); 
    console.log('3. View Task'); 
    console.log('0. Exit'); 
    console.log('-------------------------------------------------------------'); 
}
a = []; 
while (choice != 0) 
{
    showScreen(); 
    choice = Number(readLine()); 
    if (choice == 0) break; 
    switch (choice)
    {
        case 1: 
            const s = readLine('Nhap nhiem vu: '); 
            addTask(a,s); 
            break; 
        case 2: 
            viewTask(a); 
            ind = Number(readLine('Nhap thu tu can xoa: ')); 
            removeTask(a,ind); 
            break; 
        case 3: 
            viewTask(a); 
    }
}