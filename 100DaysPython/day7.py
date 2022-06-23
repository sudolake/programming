import random


word_list = ["klavesnica", "mys", "kotuc", "gay", "andreas"]

stages = ['''
  +---+
  |   |
  O   |
 /|\  |
 / \  |
      |
=========
''', '''
  +---+
  |   |
  O   |
 /|\  |
 /    |
      |
=========
''', '''
  +---+
  |   |
  O   |
 /|\  |
      |
      |
=========
''', '''
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
  |   |
      |
      |
=========
''', '''
  +---+
  |   |
  O   |
      |
      |
      |
=========
''', '''
  +---+
  |   |
      |
      |
      |
      |
=========
''']
end_game = False
lives = 6
chosen_word = random.choice(word_list)
print(chosen_word)
display = []
for i in range(len(chosen_word)):
    display += "_"
while end_game != True:


    guess = input("Guess a letter: ").lower()
    already_guessed = False
    if guess in display:
        already_guessed = True

    for position in range(len(chosen_word)):
        if guess == chosen_word[position]:
            display[position] = guess


    print(stages[lives])

    if already_guessed == True:
        print("You already guessed that...")
    print(display)





    if guess not in chosen_word:
        lives -= 1
        print(f"\nWrong, you have {lives} lives left")
        if lives < 1:
            print("You lose".upper())
            end_game = True



    if display == list(chosen_word):
        end_game = True
        print("\nYou won!".upper())



