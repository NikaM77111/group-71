let paragraph = document.getElementById("p")
let button = document.getElementById("btn")


button.addEventListener("click", () => {
    paragraph.style.color = "yellow"
})

button.addEventListener("mouseover", () => {
    paragraph.style.fontsize = "30px"
})

paragraph.addEventListener("click", () => {
    button.style.border = "2px solid red"
})