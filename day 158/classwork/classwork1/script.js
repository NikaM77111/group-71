let number = document.getElementById("number")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let body = document.body

let savedCount = localStorage.getItem("count")
let savedColor = localStorage.getItem("color")

if(savedCount !== null){
    number.innerHTML = savedCount;
}else {
    number.innerHTML = 0;
}


if(savedColor !== null){
    body.style.backgroundColor = savedColor
} else {
    body.style.backgroundColor = "blue";
}


plus.addEventListener("click", function(){
    let count = Number(number.innerHTML);
    count++;
    number.innerHTML = count
    changeColor()
    savedata() 
})

minus.addEventListener("click", function(){
    let count = Number(number.innerHTML);
    count--;
    number.innerHTML = count
    changeColor()
    savedata()
})

function changeColor(){
    let count = Number(number.innerHTML);
    if(count  >  0){
        body.style.backgroundColor = "green"
    }
    else if(count < 0){
        body.style.backgroundColor = "red"
    }
    else{
        body.style.backgroundColor = "blue"
    }
}


function savedata(){
    localStorage.setItem("count", number.innerHTML);
    localStorage.setItem("color", body.style.backgroundColor);
}