// 2) შექმენით phone ობიექტი, რომელსაც ექნება brand, model, price property-ები, შექმენით ობიექტის მეთოდი რომელსაც გადაეცემა რამე 
// რიცხვი და ამ რიცხვს დაუმატებს price-ს, გამოიტანეთ განახლებული price კონსოლში




let phone = {
    brand: "Iphone",
    model: "16 pro max",
    price: 1100,

    addPrice: function(amount) {
        this.price += amount;
        console.log(this.price)
    }
}

phone.addPrice(300)
console.log(phone.price)