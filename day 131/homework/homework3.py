# 3) შექმენით Person კლასი ატრიბუტებით (name, age, id_number).
# name უნდა იყოს public, age უნდა იყოს protected (Level 1) ხოლო id_number private (Level 2).

# შექმენით public მეთოდი რომელიც აბრუნებს ასაკს და ცალკე private მეთოდი რომელიც ამოწმებს არის თუ არა 
# პირი სრულწლოვანი გამოიძახეთ id_number  მეთოდი name mangling-ის საშუალები

class Person:
    def __init__(self, name, age, id_number):
        self.name = name  
        self._age = age 
        self.__id_number = id_number  

    def public(self):
        return self._age
    
    
    def __private(self):
        if self._age >= 18:
            return True
        return False
    
    
    def get_id_number(self):
        return self.__id_number


person = Person("John Doe", 25, "ID12345")