# try:
#     num1 = input("enter no 1: ")
#     num2 = input("enter no 2: ")
#     op = input('enter the operand')

#     if not num1.isnumeric and num2.isnumeric():
#         raise ValueError('Wrong input')
#     if op.isnumeric():
#         raise ValueError('Wrong input')
#     else:
#         if op == '+':
#             print(int(num1) + int(num2))
#         elif op == "*":
#             print(int(num1) * int(num2))
#         elif op == "-":
#             print(int(num1) - int(num2))
#         elif op == "/":
#             print(int(num1) / int(num2))
#         else:
#             print('Add valid operands')
# except (ValueError, TypeError) as e:
#     print(e)

# def add(num1, num2):
#     return num1 + num2


# n1 = int(input("Enter a no: "))
# n2 = int(input("Enter a no: "))
# sum = add(n1, n2)
# print("The sum of the two nos. is: ", sum)

# def vowel(str):
#     vowel = 'aeiou'
#     i = 0
#     for v in str:
#         if v in vowel:
#             i = i + 1
#     return i

# str = input("Enter a string: ")
# vowels = 'aeiou'
# cnt = {i: str.count(i) for i in vowels if i in str}
# print(cnt)
# from datetime import datetime

# cur = datetime.today()
# cur_date = cur.year
# dob = '20-06-2003'
# year = dob[-4:]
# print(year)
# print(int(cur_date) - int(year))

# class Person:
#     # def __init__(self, name):
#     #     self.name = name
#     def printName(self, name):
#         print("My name is", name)
    

# person = Person()
# person.printName('Aravind')

# class Calculator:
#     def add(self, a, b):
#         print(a+b)
#     def sub(self, a, b):
#         print(a-b)
#     def mul(self, a, b):
#         print(a*b)
#     def div(self, a, b):
#         print(a/b)
#     def action(self, action, a, b):
#         if action == '+':
#             self.add(a,b)
#         elif action == '-':
#             self.sub(a,b)
#         elif action == '*':
#             self.mul(a,b)
#         elif action == '/':
#             self.div(a,b)
#         else:
#             print("Wrong input")

# cal = Calculator()
# cal.action('-',10,5)

# class Person:
#     def __init__(self, name):
#         self.name = name

#     def setName(self, name):
#         self.name = name

#     def getName(self):
#         return self.name
    
# person = Person('Brock lesnar')
# print(person.getName())
# person.setName('Aravind')
# print(person.getName())

from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14 * self.radius * self.radius
    
circle = Circle(5)
print(circle.area())