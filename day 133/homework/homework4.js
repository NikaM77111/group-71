// 4) შექმენით ობიექტი calculator, რომელსაც ექნება ორი property: num1 და num2. დაამატეთ ამ ობიექტს მეთოდი add, რომელიც დააბრუნებს num1-ისა და num2-ის ჯამს. გამოიძახეთ ეს მეთოდი და დაბეჭდეთ შედეგი




let calculator = {
    num1: 5,
    num2: 10,
    
    add: function() {
        return this.num1 + this.num2;
    }
};

console.log(calculator.add()); // 15