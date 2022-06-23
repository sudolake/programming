import random


# HorT = random.randint(1,2)
# if HorT == 1:
#     print("heads")
# elif HorT == 2:
#     print("tails")


# lists

# friends = ['matej','andrea','lubos','tadeas','erik']
#
# friends[0:2] # prints 'matej' a 'andreas'
#
# friends.append("Dement")

# project - who is paying for dinner
# people = ["a", "b", "c", "d"]
# paying = people[random.randint(0,3)]
# print(paying, " is paying")
#
# # nested lists
# fruits = ["melon", "lemon"]
# vegetables = ['carrot','cabbage']
# food = [fruits,vegetables]
#
# print(food[1][1]) # prints the item from the second list, in the second position (cabbage)


# treasure map

# row1 = [" ", " ", " "]
# row2 = [" ", " ", " "]
# row3 = [" ", " ", " "]

# map = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]
#
# rowPicker = int(input("Pick a row: ")) - 1 # to make it 1-3 not 0-2
# positionPicker = int(input("Pick a position: ")) - 1 # to make it 1-3 not 0-2
#
# map[rowPicker][positionPicker] = "X"
#
# print(map[0])
# print(map[1])
# print(map[2])



# rock paper scissors


yourPick = input("What do you choose?(R/P/S): ").lower()

options = ['rock', 'paper', 'scissors']
AIPick = options[random.randint(0,2)]



if yourPick == 'r' and AIPick == 'rock':
    print("AI picked", AIPick)
    print("draw")
elif yourPick == 'r' and AIPick == 'paper':
    print("AI picked", AIPick)
    print("you lose")
elif yourPick == 'r' and AIPick == 'scissors':
    print("AI picked", AIPick)
    print("you win")


elif yourPick == 'p' and AIPick == 'paper':
    print("AI picked", AIPick)
    print("draw")
elif yourPick == 'p' and AIPick == 'rock':
    print("AI picked", AIPick)
    print("you win")
elif yourPick == 'p' and AIPick == 'scissors':
    print("AI picked", AIPick)
    print("you lose")




elif yourPick == 's' and AIPick == 'scissors':
    print("AI picked", AIPick)
    print("draw")
elif yourPick == 's' and AIPick == 'rock':
    print("AI picked", AIPick)
    print("you lose")
elif yourPick == 's' and AIPick == 'paper':
    print("AI picked", AIPick)
    print("you win")
















