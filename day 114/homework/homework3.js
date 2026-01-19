let numbers = [3, 7, 5, 8, 9, 4];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {   // ლუწი რიცხვის შემოწმება
        console.log(numbers[i]); // პირველი ლუწის დაბეჭდვა
        numbers.splice(i, 1);    // ამოგდება სიიდან
        break;                   
    }
}

console.log(numbers);
