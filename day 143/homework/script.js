const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", function (e) {
    e.preventDefault(); 

    let text = input.value;

    if (text === "") {
        return; 
    }

    let textspan = document.createElement("span");
    textspan.innerText = text;

    let item = document.createElement("div");
    item.innerText = text;

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";

    removeBtn.addEventListener("click", function () {
        list.removeChild(item);
    });

    let editBtn = document.createElement("button"); 

    editBtn.addEventListener("click", function () {
    let newText = prompt("enter your edited task: ");

    if (newText !== "" && newText !== " ") { 
        item.firstChild.textContent = newText;
        editBtn.innerText = "edit";
    }
});

    editBtn.className = "editbutton"

    item.appendChild(editBtn);
    item.appendChild(removeBtn);
    list.appendChild(item);
    input.value = ""; 
});