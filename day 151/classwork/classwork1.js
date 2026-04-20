// შექმენით მშობელი კლასი Mentor, რომელსაც ექნება კუთვნილებები: name, experience (experience-ში ჩაწერეთ begginner, intermediate ან advanced). 
// ასევე შექმენით getter რომ გამოიტანოთ მენტორის experience.

// შექმენით შვილი კლასი Assistent, რომელიც inheritence-ის მეშვეობით იღებს Mentor-ის კუთვნილებებს
//  (გამოიყენეთ super მეთოდი). ასევე დაუმატეთ mainLanguage კუთვნილება. 
// საბოლოოდ გამოიძახეთ Assistent კლასის სამივე კუთვნილება და ასევე Mentor-ის მეთოდი. 

class Mentor {
    constructor(name, experience) {
        this.name = name 
        this.experience = experience
    }
    getExperience(){
        return this.experience
    }
}

class Assistent extends Mentor {
    constructor(name, experience, MainLanguage){
        super(name, experience)
        this.MainLanguage = MainLanguage
    }
}

const assistent1 = new Assistent("Nika", "Intermediate", "Javascript")

console.log("Name:", assistent1.name)
console.log("Name:", assistent1.experience)
console.log("Main Language:", assistent1.MainLanguage)


console.log("Experience: ", assistent1.getExperience());