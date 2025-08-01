import sqlite3

conn = sqlite3.connect('mydata.db')
cursor = conn.cursor()
cursor.execute("update user set name = 'syndicate', age = 21 where id = 4")

conn.commit()
conn.close()