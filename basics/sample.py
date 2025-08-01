import sqlite3

conn = sqlite3.connect('mydata.db')
cursor = conn.cursor()
cursor.execute('''
create table if not exists user (
    id integer primary key autoincrement,
    name not null,
    age integer
)
''')

conn.commit()
conn.close()