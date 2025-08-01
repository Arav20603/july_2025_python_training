# import mysql.connector

# mydb = mysql.connector.connect(
#     host = 'localhost',
#     user = 'root',
#     password = 'roottoor',
#     database = 'aravind_cse'
# )

import mysql.connector

# Establish connection
connection = mysql.connector.connect(
    host = 'localhost',
    user = 'root',
    password = 'roottoor',
    database = 'aravind_cse'
)

id = int(input("Enter user _id: "))
name = input("Enter user name: ")
# email = input("Enter user email id: ")
# mobile = input("Enter user mobile no: ")
# password = input("Enter user password: ")


if connection.is_connected():
    mycursor = connection.cursor()
    # mycursor.execute('Select * from user')

    # myresult = mycursor.fetchall()
    # for x in myresult:
    #     print(x)
    # data = (id, name)
    # try:
    #     mycursor.execute('insert into user (id, name, email, mobile, password) values (%s, %s, %s, %s, %s)', data)
    #     connection.commit()
    #     mycursor.close()
    #     connection.close()
    # except:
    #     print("Error in inserting data")
    # else:
    #     print("Data inserted")
    # try:
    #     mycursor.execute("select count(id) from user where email = %s", (email,))
    #     myresult = mycursor.fetchall()
    #     print(myresult)
    #     if myresult[0][0] >= 1:
    #         print("Email exists")
    #     else:
    #         try:
    #             mycursor.execute('insert into user (id, name, email, mobile, password) values (%s, %s, %s, %s, %s)', data)
    #             connection.commit()
    #             mycursor.close()
    #             connection.close()
    #         except:
    #             print("Error in inserting data")
    #         else:
    #             print("Data inserted")
    # except:
    #     print("error in finding email")

def isExist(id):
    try:
        sql = 'select count(id) from user where id = %s'
        val = (id)
        mycursor.execute(sql, val)
        return True
    except:
        print("error checking")
    return False

def update_name(id, name):
    if isExist(id):
        sql = "update user set name = %s where id = %s"
        val = [name, id]
        try:
            mycursor.execute(sql, val)
            print("Name Updated successfully")
        except Exception as e:
            print(e)
    else:
        print("User does not exist")
    

update_name(id, name)
connection.commit()
mycursor.close()
connection.close()