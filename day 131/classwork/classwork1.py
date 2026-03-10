# შექმენით Car კლასი ატრიბუტებით (owner_name, plate_number)
# owner name უნდა იყოს protected attribute (Level 1)
# ხოლო plate_number უნდა იყოს private attribute (Level 2)

# ორივე გამოიტანეთ ტერმინალში. (გამოიყენეთ დამალული ატრიბუტის გამოყენების გზა რაც ვისწავლეთ.)

# კლასში დაამატეთ display_owner მეთოდი, რომელიც უნდა იყოს private attribute (Level 2) დაცული. 
# იგი გამოიძახეთ name mangling-ის საშუალებით.


class car:
    def __init__(self, owner_name, plate_number):
        self._owner_name = owner_name
        self.__plate_number = plate_number

    def __display_owner(self):
        return self._owner_name


car1 = car("Porsche","911")

print(car1._owner_name)

print(car1._car__plate_number)

print(car1._car__display_owner())