const productsDiv = document.getElementById("products")
const cartDiv = document.getElementById("cart")
const span = document.getElementById("total")

let products = []
let cart = []

async function getProducts() {
    const result = await fetch("https://fakestoreapi.com/products")

    return await result.json()
}

function showProducts() {
    productsDiv.innerHTML = ""

    products.forEach(product => {
        productsDiv.innerHTML += 
        `<div class="card">
        <img src="${product.image}">
        <h4>${product.title}</h4>
        <p>${product.category}</p>
        <h3>${product.price}</h3>
        <button onclick="addToCart(${product.id}">
            Add To Cart
        </button>
        <div>`
    })
}

