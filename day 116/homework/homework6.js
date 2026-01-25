let cities = ["Tbilisi", "Batumi", "Kutaisi", "London", "Rustavi"];

for (let i = 0; i < cities.length; i++) {
    if (cities[i] === "London") {
    cities.splice(i, 1);
    }
}

console.log(cities);
// ["Tbilisi", "Batumi", "Kutaisi", "Rustavi"]
