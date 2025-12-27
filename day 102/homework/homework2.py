user = {
    'username': 'John',
    'pass': 'J123',
    'creation year': 2016,
    'creation month': 10,
    'creation day': 28
}

user.update({
    'pass': 'J1997',
    'creation day': 26
})

print(user.items())
