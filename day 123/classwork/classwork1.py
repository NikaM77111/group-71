#1) შექმენით Car class, რომელსაც გაუწერთ თვისებებს: name, brand, horsePower, year, color. 
#class-ში ასევე დაამატეთ მეთოდი move(), რომელიც დაბეჭდავს '{car name} is moving' ყოველ გამოძახებაზე.
#დაამატეთ 2 სხვადასხვა მანქანის ცვლადი და გამოიტანეთ თითოეულის თვისება ცალ-ცალკე. ასევე ორივე მანქანაზე გამოიძახეთ move() მეთოდი.


class Car:
    def __init__(self, name, brand, horsePower, year, color):
        self.name = name
        self.brand = brand
        self.horsePower = horsePower
        self.year = year
        self.color = color
    
    def move(self):
        return f"{self.name} is moving"


car1 = Car("G63", "Mercedes", "577","2022","black")
car2 = Car("S class", "Mercedes", "367", "2024","Black")

print(car1.name)
print(car1.brand)
print(car1.horsePower)
print(car1.year)
print(car1.color)


print(car2.name)
print(car2.brand)
print(car2.horsePower)
print(car2.year)
print(car2.color)


car1.move()
car2.move()