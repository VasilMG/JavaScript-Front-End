function nnMatrix(n){
    let mm = []
    for (i=0; i < n; i++){
        let row = []
        for (j=0; j < n; j++){
            row.push(n);
        }
        mm.push(row);
    }
    for (let item of mm){
        console.log(item.join(' '));
    }
}

nnMatrix(7);