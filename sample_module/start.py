from add import add, sub, mul, div
from mymodule import checkNumber, Person
from db_methods import insertData, deleteData, updateData, selectData

# print(add(4, 5))
# print(sub(5, 2))
# print(mul(2, 5))
# print(int(div(6, 3)))

# try:
#     checkNumber(10)
# except Exception as e:
#     print(e)

# person = Person()
# person.printName()

# insertData(7, 'CM punk', 'punk@gmail.com', 298049324, '12437')
# deleteData(7)
# updateData(6, 'name', 'Cena')


for row in selectData():
    print(row)