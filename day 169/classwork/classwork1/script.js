//1) შექმენით ფუნქცია getProducts რომლის დავალებაც იქნება, რომ გააგზავნოს მოთხოვნა ამ API - ზე: 
//"https://fakestoreapi.com/products" და დააბრუნოს შედეგი, შემდგომ საიტზე შექმენით ერთი div ბლოკი და 
//ღილაკი, როდესაც ღილაკზე დაკლიკება მოხდება ეს დივ ბლოკი უნდა გაივსოს პროდუქტებიt

const productsDiv = document.getElementById("products");
const loadBtn = document.getElementById("loadBtn");
const cartDiv = document.getElementById("cart")
const totalSpan = document.getElementById("total")
const buyNow = document.getElementById("buyNow")

let products = []
let cart = []

async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json()
    
    products = data 

    productsDiv.innerHTML = ""

}

loadBtn.addEventListener("click", async () => {
    const products = await getProducts();

    productsDiv.innerHTML = "";

    products.forEach(product => {
        const productDiv = document.createElement("div");

        productDiv.innerHTML = `
            <img src="${product.image}" width="100">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
        `;

        productsDiv.appendChild(productDiv);
    });
}); 