// 4) 3 წამში კონსოლში დაბეჭდე შემთხვევითი რიცხვი 1-დან 100-მდე. 
// თუ რიცხვი 90-ზე მეტი აღმოჩნდება, გააჩერე პროცესი და დაბეჭდე: "The number has been found."



let interval = setInterval(() => {
  let random = Math.floor(Math.random() * 100) + 1;
  console.log(random);

if (random > 90) {
    console.log("The number has been found.");
    clearInterval(interval);
}
}, 3000);