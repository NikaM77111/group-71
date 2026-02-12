#მშობელი Vehicle კლასი:
class Vehicle:
    def __init__(self, brand, year, color, horsePower):
        self.brand = brand
        self.year = year
        self.color = color
        self.horsePower = horsePower

    def drive(self):
        print(f"{self.color} {self.brand} is going")

    def stop(self):
        print(f"{self.color} {self.brand} is stopping")


