// 2) შექმენით Class - ი სახელად Rectangle, მის constructor - ს გადაეცით ორი მნიშვნელობა width, height, 
// შექმენით მეთოდი სახელად getarea რომელიც გამოითვლის ამ rectangle - ის ფართობს და getPerimeter რომელიც გამოითვლის მის პერიმეტრს.
//  შექმენით სამი ობიექტი და გამოიძახეთ შესაბამისი მეთოდები


class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    
    getArea(){
        console.log(`Area of the rectangle is: ${this.width * this.height}`);
    }

    getPerimeter(){
        console.log(`Perimeter of this rectangle is: ${(this.width + this.height) * 2}`);
    }
}


const rect1 = new Rectangle(12, 19)
const rect2 = new Rectangle(6, 12)
const rect3 = new Rectangle(2, 33)

rect1.getArea();
rect1.getPerimeter();

rect2.getArea();
rect2.getPerimeter();

rect3.getArea();
rect3.getPerimeter();
