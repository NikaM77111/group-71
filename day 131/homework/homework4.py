# 4) შექმენით Phone კლასი ატრიბუტებით (model, battery_health, serial_number) 
# model იყოს  protected (Level 1)
# battery_health იყოს ასევე protected (Level 1)
# ხოლო  serial_number  - private (Level 2)

# შექმენით  charge მეთოდი და private validate_serial_number მეთოდი რომელიც ამოწმებს serial_number კოდის სიგრძეს.  
# გამოიძახეთ private მეთოდი name mangling-ის გამოყენებით.



class Phone:
    def __init__(self, model, battery_health, serial_number):
        self._model = model
        self._battery_health = battery_health
        self.__serial_number = serial_number

    def charge(self):
        print(f"Charging {self._model} phone...")

    def __validate_serial_number(self):
        if len(self.__serial_number) == 12:
            return True
        return False
    
    def get_serial_number(self):
        return self.__serial_number


phone = Phone("iPhone", 80, "123456789012")
phone.charge()