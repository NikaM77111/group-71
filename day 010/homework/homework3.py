#int() - გარდაქმნის მთელ რიცხვად
#float() - გარდაქმნის ათწილადად
#str() - გარდაქმნის სტრინგად
#bool() - გარდაქმნის ბულოვნად (True/False)

# საწყისი მონაცემთა ტიპები
integer_num = 10
float_num = 3.14
string_num = "25"
string_text = "Hello"
boolean_val = True

# გარდაქმნა
print(int(float_num))      # 3
print(int(string_num))     # 25
print(float(integer_num))  # 10.0
print(float(string_num))   # 25.0
print(str(integer_num))    # '10'
print(str(float_num))      # '3.14'
print(str(boolean_val))    # 'True'
print(bool(0))             # False
print(bool(""))            # False
print(bool("Hello"))       # True
print(bool(5))             # True
