let count = document.getElementById("count")
let dark = document.getElementById("dark")
let light = document.getElementById("light")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")

let bg = localStorage.getItem("bg")
let num = localStorage.getItem("num")

if (bg) {
    document.body.style.background = bg
}

if (bg == "black") {
    document.body.style.color = "white"
}

if (num == null) {
    num = 0
}

count.textContent = num

dark.onclick = () => {
    document.body.style.background = "black"
    document.body.style.color = "white"
    localStorage.setItem("bg", "black")
}

light.onclick = () => {
    document.body.style.background = "white"
    document.body.style.color = "black"
    localStorage.setItem("bg", "white")
}

plus.onclick = () => {
    num++
    count.textContent = num
    localStorage.setItem("num", num)
}

minus.onclick = () => {
    num--
    count.textContent = num
    localStorage.setItem("num", num)
}
