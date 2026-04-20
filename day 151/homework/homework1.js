// 1) შექმენით Class - ი სახელად Person, მის constructor - ს გადაეცით name, age, country მნიშვნელობები. 
// თქვენი დავალებაა, რომ შექმნათ Class - ში ახალი მეთოდი სახელად introduce რომელიც console-ში გამოიტანს 
// მომხმარებლის ინფორმაციას მაგალითად `Hello my name is ${name} , i am ${age} years old and I am from ${country}`,
//  შექმნით ხუთი მომხმარებლის ობიექტი და გამოიძახეთ შესაბამისი მეთოდი

class Person {
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    } 
    
    introduce(){
        console.log(`Hello my name is ${this.name}, I am ${this.age} years old and I am from ${this.country}`);
    }
}

const person1 = new Person("Nika", 17, "Georgia");
const person2 = new Person("Ana", 22, "France");
const person3 = new Person("Luka", 30, "Germany");
const person4 = new Person("Salome", 16, "Italy");
const person5 = new Person("Saba", 20, "Spain");

person1.introduce();
person2.introduce();
person3.introduce();
person4.introduce();
person5.introduce();
