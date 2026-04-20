// 5) შექმენით ობიექტი updatedStudent, რომელიც იქნება student ობიექტის ასლი, მაგრამ მასში grade იქნება
//  შეცვლილი (მაგალითად: "A") და დამატებული ექნება ახალი თვისება isGraduated: true.


const student = {
name: "Nino",
age: 21,
grade: "B"
};


const updatedStudent = {
...student,
grade: "A",
isGraduated: true
};


console.log(updatedStudent);

