let productsDiv = document.getElementById("products");
let cartDiv = document.getElementById("cart");
let total = document.getElementById("total");
let loadBtn = document.getElementById("loadBtn");
let buyNow = document.getElementById("buyNow");


//products
let addProductBtn = document.getElementById("addProduct")
let titleInput = document.getElementById("title")
let priceInput = document.getElementById("price")
let categoryInput = document.getElementById("category")
let imageInput = document.getElementById("image")
let descriptionInput = document.getElementById("describtion")

addProductBtn.addEventListener("click", function() {
    let newProduct  = {
    id: products.length + 1,
    title: titleInput.value,
    price: priceInput.value,
    category: categoryInput.value,
    image: imageInput.value,
    description: descriptionInput.value
    }
    products.push(newProduct)

    let div = document.createElement("div")
    div.className = "product"

    div.innerHTML = ` <img src="${newProduct.image}">
            <h3>${newProduct.title}</h3>
            <p>Price: $${newProduct.price}</p>
            <p>${newProduct.category}</p>
            <p>${newProduct.description} </p>
            <button>Add To Cart</button>`;

    let btn = div.querySelector("button")

    btn.addEventListener("click", function() {
        cart.push(newProduct)
        showCart()
    })
    productsDiv.appendChild(div)
})


let products = [];
let cart = [];

async function getProducts() {
    try  { 
            let res = await fetch("https://fakestoreapi.com/products");
            let data = await res.json();
            return data;
    }
    catch(error) {
    console.log("failed to load", error)
    }
}

loadBtn.addEventListener("click", async function () {
    productsDiv.innerHTML = "";
    products = await getProducts();
    for (let i = 0; i < products.length; i++) {
        let div = document.createElement("div");
        div.className = "product";
        div.innerHTML = ` <img src="${products[i].image}">
            <h3>${products[i].title}</h3>
            <p>Price: $${products[i].price}</p>
            <p>${products[i].category}</p>
            <p>${products[i].description} </p>
            <button>Add To Cart</button>`;

    let btn = div.querySelector("button");
        btn.addEventListener("click", function () {
            cart.push(products[i]);
            showCart();
        });
        productsDiv.appendChild(div);
    }
});

function showCart() {
    cartDiv.innerHTML = "";
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].price;
        let div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `<h4>${cart[i].title}</h4>
            <p>$${cart[i].price}</p>
            <button>Delete From Cart</button>`;

        let deleteBtn = div.querySelector("button");
        deleteBtn.addEventListener("click", function () {
            cart.splice(i, 1);
            showCart();
        });
        cartDiv.appendChild(div);
    }
    total.textContent = sum;
}

buyNow.addEventListener("click", function () {
    cartDiv.innerHTML = "";
    total.textContent = 0;
    productsDiv.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        let div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `<img src="${products[i].image}">
            <h3>${products[i].title}</h3>
            <p>Price: $${products[i].price}</p>
            <p>${products[i].category}</p>
            <p>${products[i].description}</p>
            <button>Add To Cart</button>`;

        let btn = div.querySelector("button");
        btn.addEventListener("click", function () {
            cart.push(products[i]);
            showCart();
        });
    productsDiv.appendChild(div);
}
});