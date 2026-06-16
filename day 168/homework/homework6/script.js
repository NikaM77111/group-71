// 6) https://jsonplaceholder.typicode.com/todos
// მოცემული API-დან წამოიღე დავალებების სია და ეკრანზე (HTML-ში) გამოიტანე სია (<ul>),
//  სადაც შესრულებული დავალებები (completed: true) იქნება მწვანე ფერის, ხოლო შეუსრულებელი - წითელი.



fetch("https://jsonplaceholder.typicode.com/todos")


.then(response => response.json())
.then(todos => {
    const list = document.getElementById("todoList");

    todos.forEach(todo => {
        const li = document.createElement("li");

        li.textContent = todo.title;

        if (todo.completed) {
        li.style.color = "green";
        } else {
        li.style.color = "red";
        }

        list.appendChild(li);
    });
})
.catch(error => console.log(error));