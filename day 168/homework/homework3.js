// 3) სცადე მონაცემების წამოღება არასწორი ლინკიდან 
// (მაგ: https://jsonplaceholder.typicode.com/wrong-endpoint).
// გამოიყენე .catch() მეთოდი, რათა შეცდომა არ გაეპაროს პროგრამას და კონსოლში
//  გამოიტანო ტექსტი: "დაფიქსირდა შეცდომა მონაცემების წამოღებისას".


fetch("https://jsonplaceholder.typicode.com/wrong-endpoint")

.then(response => {
    if (!response.ok) {
        throw new Error("Request Failed");
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log("there was an error when getting information");
});