import sqlite3

n = int(input("enter no of entries: "))

conn = sqlite3.connect('mydata.db')
cursor = conn.cursor()
for i in range(0, n):
    name = input("enter a name: ")
    age = int(input("enter age: "))
    cursor.execute("insert into user (name, age) values (?,?)", (name, age))

conn.commit()
conn.close()