const productsContainer = document.getElementById("products");

let products = []
let cart = []

async function loadProducts() {
try {
    const response = await fetch("./data.json")

    if (!response.ok) {
        throw new Error("Couldn't load products.")
    }

    products = await response.json();

    displayProducts()
  } catch (error) {
    console.error(error)
    productsContainer.innerHTML =
    "<h2>Failed to load products.</h2>"
}
}

function displayProducts() {
  productsContainer.innerHTML = "";

  products.forEach(product => {
    productsContainer.innerHTML += `
      <div class="card">
        <img src="${product.image.desktop}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <strong>$${product.price.toFixed(2)}</strong>

        <button onclick="addToCart('${product.name}')">
          Add to Cart
        </button>
      </div>
    `;
  });
}

loadProducts();