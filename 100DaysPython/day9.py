


# student_scores = {
#     "Matej" : 81,
#     "rebeka" : 23,
#     "Niel" : 55,
#     "Gay" : 100,
#
#
#
# }
#
#
# students_grades = {}
#
# for score in student_scores:
#
#
#     if student_scores[score] <= 70:
#         students_grades[score] = 'Fail'
#     elif 80 >= student_scores[score] > 70:
#         students_grades[score] = 'Acceptable'
#     elif 90 >= student_scores[score] > 80:
#         students_grades[score] = 'Exceeds Expectations'
#     elif 100 >= student_scores[score] > 90:
#         students_grades[score] = 'Outstanding'
#
#
# for grade in students_grades:
#     print(grade,"   -   " ,students_grades[grade])

# travel_log = [
# {
#   "country": "France",
#   "visits": 12,
#   "cities": ["Paris", "Lille", "Dijon"]
# },
# {
#   "country": "Germany",
#   "visits": 5,
#   "cities": ["Berlin", "Hamburg", "Stuttgart"]
# },
# ]
#
# def add_new_country(city, visits, cities):
#     travel_log.append({
#         "country": city,
#         "visits": visits,
#         "cities": cities})
#
#
#
#
#
#
# add_new_country("Russia", 2, ["Moscow", "Saint Petersburg"])
# print(travel_log)
go_again = True
people = {}
while go_again:
    name = input("What's your name?: ")
    bid = int(input("How much do you want to bid?: "))



    def add_people(name, bid):

        people[name] = bid

    def find_highest_bidder(people_bids):
        highest_bid = 0
        highest_bidder = ""
        for bid in people_bids:
            if people_bids[bid] > highest_bid:
                highest_bid = people_bids[bid]
                highest_bidder = bid



        print(f"{highest_bidder} won, he bid {highest_bid}$!")


    add_people(name, bid)

    go_again = input("Anyone else wants to bid? Y/N:").lower()
    if go_again == 'n':
        go_again = False
        find_highest_bidder(people)

    else:
        go_again = True














































