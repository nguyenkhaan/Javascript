//Viet ham tron hai mang A va B 
const get = require('prompt-sync')(); 
function sovle() {
    let a = get().split(' ').map((x) => Number(x.trim())); 
    let b = get().split(' ').map(x => Number(x.trim())); 
    let c = []; 
    //Neu ham mui ten tham so chi co 1 bien thi khong can dau dong mo ngoac 
    let n1 = a.length,n2 = b.length,i = 0, j = 0,k = 0; 
    while (i<n1 && j<n2) {
        if (a[i] < b[j]) c[k++] = a[i++];
        if (a[i] > b[j]) c[k++] = b[j++]; 
    }
    while (i<n1) c[k++] = a[i++]; 
    while (j<n2) c[k++] = b[j++]; 
    console.log(c); 
}
sovle(); 