//0) მოიძიეთ და დაიზეპირეთ HTTP status კოდები.

// 1xx – Informational
// 100 Continue, 101 Switching Protocols

// 2xx – Success
// 200 OK, 201 Created, 204 No Content

// 3xx – Redirection
// 301 Moved Permanently, 302 Found, 304 Not Modified

// 4xx – Client Error
// 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 405 Method Not Allowed, 429 Too Many Requests

// 5xx – Server Error
//500 Internal Server Error, 503 Service Unavailable



//1) დაწერე ფუნქცია რომელიც გაფილტრავს ლუწებს და იპოვი მათ საშუალოს [1,2,3,4,5,6]

function evenaverage(array){
const numbers = [1, 2, 3, 4, 5, 6];

const evens = numbers.filter(num => num % 2 === 0);
const average = evens.reduce((sum, num) => sum + num, 0) / evens.length;

console.log(average)
}

evenaverage()


// 2) დაწერე ფუნქცია, რომელიც დაითვლის სიტყვების რაოდენობას წინადადებაში. let = "I love JavaScript"

function countWords(sentence) {
    return sentence.split(" ").length;
}

let sentence = "I love JavaScript";
let wordCount = countWords(sentence);


//3) დაწერე ფუნქიცა რომელიც დააბრუნებს true თუ რიცხვი მარტივია თუ არადა false.

function iseasy(num) {
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

let result = iseasy(7);

//4) let words = ["dog", "elephant", "cat", "hippopotamus"] იპოვე ყველაზე გრძელი ისტყვა.


let words = ["dog", "elephant", "cat", "hippopotamus"];

function findWord(words) {
    let longestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}

let longest = findWord(words);


//6) let nums = [1, 2, 3, 4, 5, 6, 7, 8] დაწერე ფუნქცია რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია


let nums = [1, 2, 3, 4, 5, 6, 7, 8];

function countEvenOdd(arr) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }

    return [even, odd];
}

let result = countEvenOdd(nums);
let evenCount = result[0];
let oddCount = result[1];



//7) let nums = [10, 2, 33, 5, 7] დაწერე ფუნქცია როემლიც დააბრუენბს ყველაზე პატარა რიცხვს


let nums = [10, 2, 33, 5, 7];

function findSmallest(arr) {
    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

let result = findSmallest(nums);