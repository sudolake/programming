

# name = len(input("What's ur name?:"))
# print("Your name has " + str(name) + " characters")
#
# str(3)
# float("435")
# rok = 2005
# vek = 2022.5 - rok
# rounded = round(vek,2)
# print(rounded)

# die at 100

bill = int(input("What's the bill?: "))
tip = int(input("How much do you want to tip? 10/12/15/17?: "))
people = int(input("How many people will split the bill?: "))

pay = (bill + (bill / 100 * tip)) / people
print(f"everyone should pay {round(pay,2)}")
