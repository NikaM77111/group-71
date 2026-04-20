class Student {
    constructor(name, score){
        this.name = name;
        this.score = score;
    }

    checkResult(){
        if(this.score >= 75){
            return `Student ${this.name} successfully passed the exam with a score of ${this.score}`;
        } else {
            return `Student ${this.name} failed the exam with a score of ${this.score}`;
        }
    } 
}


const student1 = new Student("Giorgi", 80);
const student2 = new Student("Ana", 60);
const student3 = new Student("Luka", 75);

console.log(student1.checkResult());
console.log(student2.checkResult());
console.log(student3.checkResult());
