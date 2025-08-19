# შექმენით ფუნქცია, რომელიც არგუმენტებად მიიღებს სტრინგს და სიმბოლოს.
#  ფუნქციამ in keyword-ის გამოყენებით უნდა შეამოწმოს არის თუ არა მოცემული სიმბოლო სტრინგში. 
# თუ არის — დააბრუნოს "Found", თუ არა — "Not found".

def check_symbol_in_string(string, symbol):
    if symbol in string:
        return "Found"
    else:
        return "Not found"
