def clear_list_if_confirmed(my_list, user_input):
    clear_confirmation = input("ნებართვა სიის გასუფთავებაზე? (yes/no): ")
    if clear_confirmation.lower() == "yes":
        my_list.clear()
        print("სია გასუფთავებულია!")
    else:
        print("სიამ დარჩა იმავე მდგომარეობაში:")
        print(my_list)

