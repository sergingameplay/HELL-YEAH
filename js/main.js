function muda_cor(){

    let body = document.getElementById("bg");
    // número de 0 até 10
    let x = Math.floor(Math.random() * 11)

    switch(x){
        case 0:
            body.style.backgroundColor = "#3d828b";
            break;
        case 1:
            body.style.backgroundColor = "#045083";
            break;
        case 2:
            body.style.backgroundColor = "#4F4F4F";
            break;
        case 3:
            body.style.backgroundColor = "#6959CD";
            break;
        case 4:
            body.style.backgroundColor = "#4169E1";
            break;
        case 5:
            body.style.backgroundColor = "#008B8B";
            break;
        case 6:
            body.style.backgroundColor = "#DC143C";
            break;
        case 7:
            body.style.backgroundColor = "#FF4500";
            break;
        case 8:
            body.style.backgroundColor = "#FFD700";
            break;
        case 9:
            body.style.backgroundColor = "#FFFF00";
            break;
        default:
            body.style.backgroundColor = "#000000";
    }
}

function muda_cor_hex(){
    let body = document.getElementById("bg");
    const hex = "0123456789ABCDEF";
    let cor = "#";

    for(let i = 0; i < 6; i++){
        cor += hex.charAt(Math.floor(Math.random() * hex.length))
    }
    body.style.backgroundColor = cor;
}