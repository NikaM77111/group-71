// 1) ქულის მიხედვით შეფასება (switch case)
let score = Number(prompt("შეიყვანეთ ქულა (0-100):"));

let grade;

switch (true) {
    case score >= 90 && score <= 100:
    grade = "A";
    break;
    case score >= 80 && score <= 89:
    grade = "B";
    break;
    case score >= 70 && score <= 79:
    grade = "C";
    break;
    case score >= 60 && score <= 69:
    grade = "D";
    break;
    case score >= 0 && score <= 59:
    grade = "F";
    break;
    default:
    grade = "invalid score";
}

console.log(grade);
