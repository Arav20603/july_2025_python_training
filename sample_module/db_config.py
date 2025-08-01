import mysql.connector

def getDB():
    mydb = mysql.connector.connect(
    host = 'localhost',
    user = 'root',
    password = 'roottoor',
    database = 'aravind_cse'
    )

    if mydb.is_connected():
        return mydb
