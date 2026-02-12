# Class Inheritance

# კლასის მემკვიდრეობა ნიშნავს, რომ ერთი კლასი (შვილი კლასი)
# იღებს თვისებებსა და მეთოდებს სხვა კლასიდან (მშობელი კლასი). ეს საშუალებას
# იძლევა, რომ არ დაიმეოროთ კოდის ნაწილის დაწერა და მისი მობილურობა შეინარჩუნოთ.
# Python-ში მემკვიდრეობა ხდება სიმბოლური წესით: class Child(Parent).

# მაგალითი:

class Animal:
    def speak(self):
        print("Animal speaks")

class Dog(Animal):
    def speak(self):
        print("Dog barks")

d = Dog()
d.speak()  # Dog barks