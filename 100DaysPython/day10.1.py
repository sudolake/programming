



# def name_maker(fname, lname):
#
#
#
#     fullName = (fname + " " + lname).capitalize()
#     return fullName
#
#
#
# myname = name_maker("matej", "krajcovic")
# print(myname)

def add(n1, n2):
    return n1+n2
def substract(n1, n2):
    return n1-n2
def divide(n1, n2):
    return n1/n2
def times(n1, n2):
    return n1*n2


def calculator():
    operations = {
        "+": add,
        "-": substract,
        "/": divide,
        "*": times,
    }

    Continue = True
    num1 = float(input("What's the first number?: "))
    for key in operations:
        print(key)

    while Continue:
        num2 = float(input("What's the next number?: "))
        operator = input("What do you want to happen +-/*?: ")

        calculate_function = operations[operator]
        answer = calculate_function(num1, num2)

        print(f"{num1} {operator} {num2} = {answer}")

        go_again = input("Do you want to continue with ur calculation?Y, start a new one N or exit E: ").lower()
        if go_again == "y":
            num1 = answer
        elif go_again == 'n':
            calculator()
        else:
            Continue = False
            break


calculator()


