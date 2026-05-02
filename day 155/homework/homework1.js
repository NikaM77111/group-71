// localStorage არის ბრაუზერის მეხსიერება (Web Storage),
// რომელიც საშუალებას გვაძლევს შევინახოთ მონაცემები key-value ფორმატში

// მთავარი თვისებები:
// - მონაცემები ინახება ლოკალურად (მხოლოდ იმავე ბრაუზერში)
// - არ იშლება გვერდის refresh-ის დროს
// - ინახავს მხოლოდ string ტიპის მონაცემებს

// ძირითადი მეთოდები:

// მონაცემის შენახვა
localStorage.setItem("name", "Giorgi");

// მონაცემის წამოღება
const name = localStorage.getItem("name");
console.log(name); 

// მონაცემის წაშლა
localStorage.removeItem("name");

// ყველაფრის გასუფთავება
localStorage.clear();


// რადგან localStorage მხოლოდ string-ს ინახავს,
// ობიექტების შესანახად ვიყენებთ JSON.stringify()

const user = {
name: "Nino",
email: "nino@gmail.com"
};

// ობიექტის შენახვა
localStorage.setItem("user", JSON.stringify(user));

// წამოღება
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); 
