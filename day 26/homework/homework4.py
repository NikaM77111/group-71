vending_machine = ["Cola", "Fanta", "Water", "Chips", "Snickers",
"Twix", "Sandwich", "Juice", "Ice Cream", "Energy Drink"]

print("მოგესალმებით ვენდინგ მანქანაში!")
print("აირჩიეთ პროდუქტი ნომრით:")

# პროდუქტების სიის გამოტანა ინდექსებით — ხელით
print("0 :", vending_machine[0])
print("1 :", vending_machine[1])
print("2 :", vending_machine[2])
print("3 :", vending_machine[3])
print("4 :", vending_machine[4])
print("5 :", vending_machine[5])
print("6 :", vending_machine[6])
print("7 :", vending_machine[7])
print("8 :", vending_machine[8])
print("9 :", vending_machine[9])

# მომხმარებლის არჩევანი
choice = int(input("შეიყვანეთ ნომერი: "))

# არჩევანის შემოწმება (ვიცით ზუსტად 10 ელემენტია)
if choice == 0:
    print("თქვენ აირჩიეთ:", vending_machine[0])
elif choice == 1:
    print("თქვენ აირჩიეთ:", vending_machine[1])
elif choice == 2:
    print("თქვენ აირჩიეთ:", vending_machine[2])
elif choice == 3:
    print("თქვენ აირჩიეთ:", vending_machine[3])
elif choice == 4:
    print("თქვენ აირჩიეთ:", vending_machine[4])
elif choice == 5:
    print("თქვენ აირჩიეთ:", vending_machine[5])
elif choice == 6:
    print("თქვენ აირჩიეთ:", vending_machine[6])
elif choice == 7:
    print("თქვენ აირჩიეთ:", vending_machine[7])
elif choice == 8:
    print("თქვენ აირჩიეთ:", vending_machine[8])
elif choice == 9:
    print("თქვენ აირჩიეთ:", vending_machine[9])
else:
    print("არასწორი ნომერია.")

