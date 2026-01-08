user = {
    "name" = "giorgi";
    "age" = "19";
}

try:
    print(user["email"])
except KeyError:
    print("key doesnt exist")