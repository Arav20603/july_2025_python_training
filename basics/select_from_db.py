import sqlite3

conn = sqlite3.connect('mydata.db')
cursor = conn.cursor()
cursor.execute("Select * from user")
rows = cursor.fetchall()

# for row in rows:
#     print(row)

conn.commit()
conn.close()