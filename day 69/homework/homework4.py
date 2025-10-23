def remove_element_at_index(fruits):
    index = int(input("შეიყვანეთ ინდექსი, რომლის მიხედვითაც გსურთ ელემენტის ამოშლა: "))
    if 0 <= index < len(fruits):
        removed_item = fruits.pop(index)
        print(f"ამოჭრილი ელემენტი: {removed_item}")
        print("ახალი სია:", fruits)
    else:
        print("არასწორი ინდექსი!")

# მაგალითი
fruits = ["apple", "banana", "cherry", "date"]
remove_element_at_index(fruits)
