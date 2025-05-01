#print "lika"  -----> print("lika")   Python -ში print არის ფუნქცია და სჭირდება ფრჩხილები.
print("lika")

#analyst_salary = 3000  
#print(Analyst_salary)   ცვლადის სახელი პატარა ასოებითაა გამოცხადებული, მაგრამ ბეჭდვისას დიდი ასოთია გამოყენებული.
analyst_salary = 3000  
print(analyst_salary)  

#n1 = 27  
#n2 = "12" არ შეიძლება რიცხვის და სტრინგის დაჯამება.

n1 = 27  
n2 = int("12")  # ან
# n2 = 12
print(n1 + n2)  


#status = Mentor  სტრინგი არ იყო ბრჭყალებში, Python ცდილობს ცვლადის მოძებნას სახელით 'Mentor', რომელიც არ არსებობს.
#print(status)

status = "Mentor"  
print(status)   


# print "lika"  
#Python-ში print არის ფუნქცია და სჭირდება ფრჩხილები.
print("lika")

# analyst_salary = 3000  
# print(Analyst_salary)  
#~ ცვლადის სახელი გამოცხადებულია პატარა ასოებით (analyst_salary), 
# მაგრამ ბეჭდვისას გამოყენებულია დიდი ასოთი (Analyst_salary), რაც იწვევს შეცდომას.
analyst_salary = 3000  
print(analyst_salary)

# n1 = 27  
# n2 = "12"  
#  თუ n1 და n2-ს დავაჯამებთ (n1 + n2), 
# პროგრამა დააბრუნებს შეცდომას, რადგან რიცხვსა და სტრინგს არ შეუძლია დაჯამება.
n1 = 27  
n2 = int("12")  
print(n1 + n2)

# status = Mentor  
# print(status)  
#  სტრინგი უნდა იყოს ბრჭყალებში. ამ შემთხვევაში Python ეძებს ცვლადს სახელად Mentor, რომელიც არ არსებობს.
status = "Mentor"  
print(status)
