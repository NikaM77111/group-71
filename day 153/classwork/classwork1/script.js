class BookLibrary {
    constructor(name, author){
        this.name = name
        this.author = author
    }

    createBookElement() {
        const booksDiv = document.createElement("div");
        booksDiv.className ="book";

        const title = document.createElement("h3");
        title.textContent = this.name;

        const authorText = document.createElement("P");
        authorText.textContent = "Author: " + this.author;
        
        return booksDiv;
    }
}

function addBook() {
    const nameInput = document.getElementById("name").value 
    const authorInput = document.getElementById("author").value

    if(nameInput === "" || authorInput === ""){
        alert("please enter correct names");
        return;
    }

    const book = new BookLibrary(nameInput, authorInput);

    const Library = document.getElementById("library");
    const BookElement = book.createBookElement()

    
}