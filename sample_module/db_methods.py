from db_config import getDB

def insertData(id, name, email, mobile, password):
    mydb = getDB()
    mycursor = mydb.cursor()
    try:
        sql = "insert into user (id, name, email, mobile, password) values (%s, %s, %s, %s, %s)"
        val = (id, name, email, mobile, password)
        mycursor.execute(sql, val)
        mydb.commit()
        mycursor.close()
        mydb.close()
        print("Data inserted succesfully.")
    except Exception as e:
        print(e)

def updateData(id, para1, para2):
    mydb = getDB()
    mycursor = mydb.cursor()
    if para1 != ('name' or 'email' or 'password' or 'mobile'):
        print("Pls give valid fields")
        return
    try:
        sql = f"update user set {para1} = %s where id = %s"
        val = (para2, id)
        mycursor.execute(sql, val)
        mydb.commit()
        mycursor.close()
        mydb.close()
        print("Data updated succesfully.")
    except Exception as e:
        print(e)


def deleteData(id):
    mydb = getDB()
    mycursor = mydb.cursor()
    try:
        sql = "delete from user where id = %s"
        val = [id]
        mycursor.execute(sql, val)
        mydb.commit()
        mycursor.close()
        mydb.close()
        print("Data deleted succesfully")
    except Exception as e:
        print(e)

def selectData():
    mydb = getDB()
    mycursor = mydb.cursor()
    try:
        sql = "select * from user"
        mycursor.execute(sql)
        myresult = mycursor.fetchall()
        mycursor.close()
        mydb.close()
        print("Data fetched succesfully")
        return myresult
    except Exception as e:
        print(e)
