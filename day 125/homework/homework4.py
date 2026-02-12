#მშობელი Employee კლასი:
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def get_salary(self):
        print(f"{self.name}'s salary is: ${self.salary}")


#შვილი Manager კლასი:
class Manager(Employee):
    def __init__(self, name, salary):
        super().__init__(name, salary)

    def bonus_salary(self):
        return self.salary * 1.2


#გამოყენება:
e = Employee("John", 50000)
e.get_salary()  # John’s salary is: $50000

m = Manager("Alice", 70000)
m.get_salary()  # Alice's salary is: $70000
print(f"Bonus Salary: ${m.bonus_salary()}")  # Bonus Salary: $84000
