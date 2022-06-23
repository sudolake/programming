



# def function(name, age):
#
#     print(f"Hello {name}")
#     print(f"You are {age} years old")
#
#
# function('Angela', 23) # positional argument
#
# function(age=42,name="Kokot") # keyword argument
import math

# how many cans of paint do I need?

# def number_of_cans(wall_height, wall_width, coverage):
#
#     total = (wall_height * wall_width) / coverage
#
#     print(math.ceil(total))
#
#
#
# number_of_cans(2, 4, 5)




# def is_prime(number):
#     not_prime = False
#     prime = False
#     for i in range(2, number):
#         if number % i == 0:
#             not_prime = True
#             break
#     if number % number == 0 and number % 1 == 0:
#         prime = True
#     else:
#         prime = False
#     if not_prime == False and prime == True:
#         print("its a prime number")
#     else:
#         print("its not a prime number")
# is_prime(97)

import art
print(art.logo)
alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
            'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
            'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']






go_again = True

while go_again == True:
    direction = input("Type 'encode' to encrypt, type 'decode' to decrypt:\n").lower()
    text = input("Type your message:\n").lower()
    shift = int(input("Type the shift number:\n"))

    def ceaser(direction, text_input, shift_amount):
        if direction == 'decode':
            shift_amount *= -1
        new_msg = ""
        for letter in text_input:

            if letter not in alphabet:
                new_msg += letter
            else:
                position = alphabet.index(letter)
                position += shift_amount
                new_msg += alphabet[position]


        print(f"{direction}d message: {new_msg}")

    check = input("Want to go again? yes/no: ").lower()
    if check == 'no':
        go_again = False

    else:
        print("invalid input")
        go_again = False









    shift = shift % 26 # so that the shift can be infinite (alphabet is 26 letters)
    ceaser(direction, text, shift)











