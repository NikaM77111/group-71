day1 = input("Enter day 1: ")
day2 = input("Enter day 2: ")
day3 = input("Enter day 3: ")
day4 = input("Enter day 4: ")
day5 = input("Enter day 5: ")
day6 = input("Enter day 6: ")
day7 = input("Enter day 7: ")

days = [day1, day2, day3, day4, day5, day6, day7]

for i in range(0, 7):
    if i % 2 == 0:
        print(days[i])
