// 6) მოცემულია მასივი:
// words = ["python", "java", "c", "javascript", "go"]
// გამოიყენეთ:
// filter → დატოვეთ სიტყვები, რომელთა სიგრძეც აღემატება 3-ს.
// map → გადაიყვანეთ დიდ ასოებად.
// reduce → გააერთიანეთ ერთ წინადადებად.



const words = ["python", "java", "c", "javascript", "go"]

const longwords = words.filter(word => word.length > 3);

const upperwords = longwords.map(word => word.toUpperCase());

const sentence = upperwords.reduce((acc, current) => acc + current);

console.log(sentence);


