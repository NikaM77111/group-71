//6) დაწერე ფუნქცია calculateTotal, რომელიც მიიღებს განუსაზღვრელი რაოდენობის რიცხვებს (Rest), შეკრებს მათ და დააბრუნებს ჯამს.


function calculateTotal(...numbers) {
return numbers.reduce((sum, num) => sum + num);
}


console.log(calculateTotal(1, 2, 3));        
console.log(calculateTotal(10, 20, 30, 40));
