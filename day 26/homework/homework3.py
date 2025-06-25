name = input("შეიყვანე შენი სახელი: ")
surname = input("შეიყვანე შენი გვარი: ")
user_id = input("შეიყვანე შენი ID ნომერი: ")
nationality = input("შეიყვანე შენი ეროვნება: ")

User_info = [name, surname, user_id, nationality]

print("სრული სია:", User_info)

# ინდექსის მიხედვით გამოტანა
print("სახელი:", User_info[0])
print("გვარი:", User_info[1])
print("ID ნომერი:", User_info[2])
print("ეროვნება:", User_info[3])
