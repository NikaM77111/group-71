let list1 = ["Ana", "Giorgi", "Nino", "Luka"];
let list2 = ["Nino", "Luka", "Mariam", "Dato"];

let mutualNames = [];

for (let i = 0; i < list1.length; i++) {
    if (list2.includes(list1[i])) {
        mutualNames.push(list1[i]);
    }
}

console.log(mutualNames);
