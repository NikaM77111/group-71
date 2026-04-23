class BookLibrary {
    constructor(name, author) {
        this.name = name;
        this.author = author;
   }


}

const addBtn = document.getElementById("addBtn");
const library = document.getElementById("library");


addBtn.addEventListener("click", () => {
    const name = document.getElementById("bookName").value;
    const author = document.getElementById("authorName").value;

    if (name === "" || author === "") return;

    const book = new BookLibrary(name, author);
    addBookToUI(book);


    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
});

function addBookToUI(book) {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = book.name;

    const author = document.createElement("p");
    author.textContent = book.author;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
        library.removeChild(card);
    });

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(deleteBtn);

    library.appendChild(card);
}
