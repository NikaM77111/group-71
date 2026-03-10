# შექმენით Person კლასი (name, age).
#შემდეგ შექმენით Student კლასი, რომელიც ამატებს 
# grade-ს და super()-ით ინიციალიზაციას აკეთებს.


class person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class student(person):
    def __init___(self, grade)            