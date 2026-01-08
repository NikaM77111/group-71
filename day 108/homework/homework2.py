def hello(name):
    return f"Hello, {name}"

def goodbye(name):
    return f"Goodbye, {name}"

def process_user(func, name):
    return func(name)


print(process_user(hello, "Deme"))
print(process_user(goodbye, "Deme"))
