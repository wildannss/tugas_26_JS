function tugas26(){
    let x = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    x.forEach(function(item,index){
        let y = isFinite(item);
        if (y)
        y = 'Infintify.'
        y = 'NOT Infintify.';
        console.log("Angka " + item + " " + y);
    });
};

tugas26();