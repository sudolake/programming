
# BMI #
# height = int(input("height in cm: ")) / 100
# weight = int(input("weight in kg: "))
#
# BMI = weight / (height*height)
# print(round(BMI))



# is a leap year? #
# year = int(input("What year is it?: "))
#
#
# if year % 4 == 0:
#     if year % 100 != 0 or year % 400 == 0:
#         print("leap")
#     else:
#         print("not")
# else:
#     print("not")

# pizza order practice #
#
# size = input("Size S/M/L: ").upper()
# pepperoni = input("Would you like pepperoni Y/N?: ").upper()
# cheese = input("Would you like extra cheese Y/N?: ").upper()
# price = 0
# if size == 'S':
#     price += 15
#
#     if pepperoni == 'Y':
#         price += 2
#
# elif size == 'M':
#     price += 20
#
#     if pepperoni == 'Y':
#         price += 3
#
# elif size == 'L':
#     price += 25
#
#     if pepperoni == 'Y':
#         price += 3
# if cheese == 'Y':
#     price += 1
#
# print("price: ", price)


# love calc #
# name1 = input("name1: ").lower()
# name2 = input("name2: ").lower()
# letters1 = 0
# letters2 = 0
#
# letters1 = letters1 + name1.count('t')
# letters1 = letters1 + name1.count('r')
# letters1 = letters1 + name1.count('u')
# letters1 = letters1 + name1.count('e')
#
# letters2 = letters2 + name2.count('t')
# letters2 = letters2 + name2.count('r')
# letters2 = letters2 + name2.count('u')
# letters2 = letters2 + name2.count('e')
#
# true_occurs = letters1 + letters2
# ll1 = 0
# ll2 = 0
# ll1 = ll1 + name1.count('l')
# ll1 = ll1 + name1.count('o')
# ll1 = ll1 + name1.count('v')
# ll1 = ll1 + name1.count('e')
#
# ll2 = ll2 + name2.count('l')
# ll2 = ll2 + name2.count('o')
# ll2 = ll2 + name2.count('v')
# ll2 = ll2 + name2.count('e')
#
# love_occurs = ll1 + ll2
#
# combined = str(true_occurs) + str(love_occurs)
# combined = int(combined)
# if 10 > combined or combined > 90:
#     print(f"Your score is {combined}, you go together like coke and mentos.")
# elif 40 > combined < 50:
#     print(f"Your score is {combined}, you are alright together.")
# else:
#     print(f"your score is {combined}")

print("hey")
lor = input("left or right L/R: ").lower()
if lor == 'r':
    print("Game over")

else:
    sow = input("swim or wait S/W: ").lower()
    if sow == 's':
        print("Game over")
    else:
        sd = input("which door R/B/Y: ").lower()
        if sd == 'b' or sd == 'r':
            print("game over")
        elif sd == 'y':
            print("You win!")









