const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

function createTask(text) {
const task = document.createElement("div");
task.classList.add("task");

const span = document.createElement("span");
span.textContent = text;

const removeBtn = document.createElement("button");
removeBtn.textContent = "Delete";
removeBtn.classList.add("delete-btn");

removeBtn.addEventListener("click", () => {
    task.remove();
});

task.appendChild(span);
task.appendChild(removeBtn);

return task;
}

button.addEventListener("click", () => {
const text = input.value.trim();

if (text === "") {
        return; 
    }

const task = createTask(text);
list.appendChild(task);

input.value = "";
});