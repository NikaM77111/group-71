# #შექმენით მშობელი კლასი სახელად Bird. მას გადაეცით init-ის საშუალებით თვისება name. ასევე მეთოდი eat და sleep.
# Bird-ს ჰყავდეს 2 სტამომავალი კლასი: Seagull და Duck. მათ მიეცით საკუთარი მეთოდი speak. 
# გამოიძახეთ შვილი კლასებიდან ყველა შექმნილი მეთოდი

class Bird:
    def __init__(self, name):
        self.name = name
    
    def eat(self):
        print(f"{self.name} is eating.")

    def sleep(self):
        print(f"{self.name} is sleeping.")
    

class seagull(Bird):
    def speak(self):
        print(f"{self.name} says squawck:")


class Duck(Bird):
    def speak(self):
        print(f"{self.name} says quack!")

seagull = seagull("The Runner")
Duck = Duck("Ducky")

seagull.eat()
seagull.sleep()
seagull.speak()

print("______________________")


Duck.eat()
Duck.sleep()
Duck.speak()