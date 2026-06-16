// 2) გამოიყენე fetch() და .then() მეთოდი, რათა წამოიღო მომხმარებლების სია Api-დან: 
// (https://jsonplaceholder.typicode.com/users).
//  დაბეჭდე კონსოლში მხოლოდ მომხმარებლების სახელი (name) და ელ-ფოსტა (email).



fetch("https://jsonplaceholder.typicode.com/users")

    .then(answer => answer.json())
    .then(list => {
        list.forEach(user => {
            console.log(`name: ${user.name}`)
            console.log(`email: ${user.email}`)
        })
    })