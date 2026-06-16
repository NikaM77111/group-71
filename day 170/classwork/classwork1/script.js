// Fakestore api-დან წამოიღეთ მონაცემები. გაფილტრეთ ისეთი პროდუქტები, 
// რომელთა id-იც ლუწი რიცხვია და მხოლოდ ისინი გამოიტანეთ საიტზე.
// საიტზე ეს პროდუქტები დივის სახით ჩასვით, მაქსიმალურად გასტილეთ და ასევე წამოიღეთ ამ api-დან პროდუქტის ფოტოც.
// ეს ყველაფერი გააკეთეთ async/await-ის მეშვეობით და გაჰენდლეთ try/catch-ით
// https://fakestoreapi.com/products

const container = document.getElementById("products-container");

async function getProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if(!response.ok){
            throw new Error("failed to fetch products");
        }
        const products = await response.json();

        const evenproducts = products.filter(product => product.id % 2 === 0);

        evenproducts.forEach(product => {
            const card = document.createElement("div")
            card.classList.add("product-card")

            card.innerHTML = `<img src="${product.image}" "alt=${product.title}">
            <h2>${product.title}</h2>
            <p class="price">$${product.price}</p>
            <p class="describtion">$${product.describtion}</p>
            `

            container.appendChild(card);
        })
    } catch (error) {
        console.log(error)
        container.innerHTML = `<h2 style="color: red; text-align:center">Erorr Loading products</h2>`
    }
}

getProducts()