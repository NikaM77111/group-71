#შექმენით Movie მშობელი კლასი და გაუწერეთ ატრიბუტი: name.
#ამავე კლასში შექმენით მეთოდი display_info(), რომელიც დაბეჭდავს წინადადებას 'The name of the film is...{name}'
#შექმენით შვილი კლასი და დაარქვით თქვენი საყვარელი ფილმის სახელი. გამოიყენეთ super() მეთოდი,
#  რომ ამ კლასს დაუმატოთ ახალი ატრიბუტები: director, year.
#display_info() მეთოდი შეცვალეთ Method overriding-ის გარეშე super()-ის გამოყენებით და მან უნდა გამოიტანოს 
# ახალი ინფორმაცია: 'The name of the film is {name}. \n The director is {directr} \n and it came out in {year}.



class Movie:
    def __init__(self, name):
        self.name = name

    def  display_info(self):
        print(f'The name of the film is...{self.name}')

class Goodfellas(Movie):
    def __init__(self, name, director, year):
        super().__init__(name)
        self.director = director
        self.year = year

    def display_info(self):
        super().display_info()
        print(f"'The name of the film is {self.name}. \n The director is {self.director} \n and it came out in {self.year}.")


film = Goodfellas("Goodfellas","Martin Scorsese","1990")

