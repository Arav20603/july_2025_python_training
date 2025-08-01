import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="roottoor",
  database="aravind_cse"
)

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM hobbies")

myresult = mycursor.fetchall()

for x in myresult:
  print(x)