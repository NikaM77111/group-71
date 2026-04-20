// 3) შექმენი კლასი სახელად Book, რომლის constructor იღებს title,pages,year მნიშვნელობებს,
// შექმენი მეთოდი სახელად getBookInfo თუ pages > 300 დააბრუნოს: This book is called ${title}, it has ${pages} 
// pages and was released in ${year}. შექმენით სამ ობიექტი და გამოიძახეთ შესაბამისი მეთოდები

class Book {
    constructor(title, pages, year){
        this.title = title;
        this.pages = pages;
        this.year = year;
    } 
    
    getBookInfo(){
        if(this.pages > 300){
            return `This book is called ${this.title}, it has ${this.pages} pages and was released in ${this.year}.`;
        } else {
            return `This book ${this.title} has less than 300 pages.`;
        }
    }
}


const book1 = new Book("Dark", 200, 1998);
const book2 = new Book("Uncharted", 350, 2013);
const book3 = new Book("The Twilight", 190, 2008);

console.log(book1.getBookInfo());
console.log(book2.getBookInfo());
console.log(book3.getBookInfo());
