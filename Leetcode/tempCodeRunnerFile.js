a.push(INF); 
    b.push(INF); 
    const swap = (a,b) => {
        [a,b] = [b,a]; 
    }
    if (a.length < b.length) swap(a,b); 
    else if (a.length > b.length) swap(a,b);  
    console.log(solve(a,b)); 