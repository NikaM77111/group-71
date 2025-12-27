celsius = float(input("შეიყვანეთ ტემპერატურა ცელსიუსში: "))
fahrenheit = celsius * 9/5 + 32

if fahrenheit > 89.6:
    print("გაგრილების სისტემა ჩაირთო.")
else:
    print("ტემპერატურა ნორმალურია.")
