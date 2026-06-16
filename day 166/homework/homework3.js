// 3) შექმენით ფუნქცია getProduct რომელსაც გადაეცემა success არგუმენტი, შემდგომ ამ ფუნქციამ უნდა დააბრუნოს 
// Promise - ი და მის შიგნით შეამოწმეთ success - ის მნიშვნელობა, თუ მისი მნიშვნელობა არის true - დაუბრუნეთ 
// resolve ფუნქციით პროდუქტის ობიექტი (title, description, price, stock), ყველა სხვა შემთხვევაში - reject - ით 
// დააბრუნეთ ერორის ობიექტი (status, message). (გატესტეთ ამ ფუნქციის ორივე შემთხვევა)

function getProduct(success) {
return new Promise((resolve, reject) => {
    if (success) {
    resolve({
        title: "Laptop",
        description: "Gaming Laptop",
        price: 2500,
        stock: 10
    });
    } else {
    reject({
        status: 404,
        message: "Product not found"
    });
    }
});
}

getProduct(true)
.then(product => {
    console.log("Product:", product);
})
.catch(error => {
    console.log("Error:", error);
});

getProduct(false)
.then(product => {
    console.log("Product:", product);
})
.catch(error => {
    console.log("Error:", error);
});