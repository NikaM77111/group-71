let temp = document.getElementById("temp")
let increase = document.getElementById("increase")
let decrease = document.getElementById("decrease")
let reset = document.getElementById("reset")
let body = document.body


let savedTemp = localStorage.getItem("temperature")
let savedColor = localStorage.getItem("bgColor")


function changeColor(){
    let value = Number(temp.innerHTML)

    if(value > 30){
        body.style.backgroundColor = "orange"
    }
    else if(value >= 10 && value <= 30){
        body.style.backgroundColor = "green"
    }
    else{
        body.style.backgroundColor = "skyblue"
    }
}

function saveData(){
    localStorage.setItem("temperature", temp.innerHTML)
    localStorage.setItem("bgColor", body.style.backgroundColor)
}


if(savedTemp !== null){
    temp.innerHTML = savedTemp
} else {
    temp.innerHTML = 20
}

if(savedColor !== null){
    body.style.backgroundColor = savedColor
} else {
    changeColor()
}


increase.addEventListener("click", function(){
    let value = Number(temp.innerHTML)
    value++
    temp.innerHTML = value
    changeColor()
    saveData()
})


decrease.addEventListener("click", function(){
    let value = Number(temp.innerHTML)
    value--
    temp.innerHTML = value
    changeColor()
    saveData()
})


reset.addEventListener("click", function(){
    temp.innerHTML = 20
    changeColor()
    saveData()
})

