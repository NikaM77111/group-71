# 5) შექმენით OnlineCourse კლასი ატრიბუტებით (course_name, students_enrolled, max_students) 

# course_name იყოს protected (Level 1) 
# students_enrolled იყოს private (Level 2) 
# max_students კი იყოს private ატრიბუტი (Level 2) 
# შექმენით  enroll მეთოდი და private check_availability მეთოდი რომელიც ამოწმებს 
# თავისუფალ ადგილებს გამოიძახეთ private მეთოდი name mangling-ის საშუალებით.

# ასევე გამოიძახეთ course_name, students_enrolled და max_students  ატრიბუტები სფეციალური ხერხის გამოყენებით.




class OnlineCourse:
    def __init__(self, course_name, students_enrolled, max_students):
        self._course_name = course_name  
        self.__students_enrolled = students_enrolled  
        self.__max_students = max_students  


    def enroll(self, student):
        if self.__check_availability():
            self.__students_enrolled += 1
            print(f"{student} enrolled successfully!")
        else:
            print("Course is full.")
    
    def __check_availability(self):
        if self.__students_enrolled < self.__max_students:
            return True
        return False
    
    def get_course_details(self):
        return self._course_name, self.__students_enrolled, self.__max_students
