def student_grade(score):
    if 90 <= score <= 100:
        print("A")
    elif 70 <= score <= 89:
        print("B")
    elif 50 <= score <= 69:
        print("C")
    elif 0 <= score <= 49:
        print("F")
    else:
        print("Invalid score") 
