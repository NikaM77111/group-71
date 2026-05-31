let box = document.getElementById("box")


let position = 0;

setInterval(() => {
    position += 50

    if(position > 1000){
        position = 0
    }

    box.style.marginLeft = position + "px";
}, 100)