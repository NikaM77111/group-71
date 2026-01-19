usernames = []
for i in range(5):
    usernames.append(input("enter your name: "))

filterered_users = list(filter( lambda name: len(name) > 5, usernames))
print(filterered_users)