let nameInput = document.getElementById("nameInput")
let numberInput = document.getElementById("numberInput")
let monthInput = document.getElementById("monthInput")
let yearInput = document.getElementById("yearInput")
let cvcInput = document.getElementById("cvcInput")

let nameText = document.getElementById("nameText")
let numberText = document.getElementById("numberText")
let monthText = document.getElementById("monthText")
let cvcText = document.getElementById("cvcText")


nameInput.addEventListener("keyup", function(e){
    e.preventDefault()
    nameText.innerHTML = nameInput.value;

    if(nameInput.value == ""){
        nameText.innerHTML = "JANE APPLESEED"
    }
})

numberInput.addEventListener("keyup", function(e){
    e.preventDefault()
    numberText.innerHTML = numberInput.value;

    if(numberInput.value == ""){
        numberText.innerHTML = "0000 0000 0000 0000";
}
})


monthInput.addEventListener("keyup", function(e){
    e.preventDefault()
    monthText .innerHTML =monthInput.value;

    if(monthInput == ""){
        numberText.innerHTML = "00";
    }
})


cvcInput.addEventListener("keyup", function(e){
    e.preventDefault()
    cvcText.textContent = cvcInput.value;

        if(cvcInput == ""){
        numberText.innerHTML = "000";
        }
})


