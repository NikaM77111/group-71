usernames = []
for i in range(5):
    usernames.append(input("enter your name"))

greet_users = list(map(lambda name: "welcome " + name, usernames))

print(greet_users)