from flask import Flask, request, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'roottoor'
app.config['MYSQL_DB'] = 'aug_cse'

mysql = MySQL(app)


@app.route('/')
def hello():
    return 'hello'

@app.route('/store', methods=['get', 'post'])
def store_data():
    try:
        cur = mysql.connection.cursor()
        # title = request.form['title']
        # content = request.form['content']
        json = request.get_json()
        title = json.get('title')
        content = json.get('content')
        sql = 'insert into blog (title, content) values (%s, %s)'
        val = (title, content)
        cur.execute(sql, val)
        mysql.connection.commit()
        cur.close()
        return f'Inserted data successfully: \nTitle: {title}\nContent: {content}'
    except Exception as e:
        return f'Error in inserting data: {e}'
    
@app.route('/update', methods=['post'])
def updateData():
    try:
        cur = mysql.connection.cursor()
        # title = request.form['title']
        # content = request.form['content']
        json = request.get_json()
        id = json.get('id')
        title = json.get('title')
        content = json.get('content')
        sql = "update blog set title = %s, content = %s where id = %s"
        val = [title, content, id]
        cur.execute(sql, val)
        mysql.connection.commit()
        cur.close()
        return f'Updated data successfully:\nId: {id}\nTitle: {title}\nContent: {content}'
    except Exception as e:
        return f'Error is updating data: {e}'

@app.route('/delete', methods=['post'])
def deleteData():
    try:
        cur = mysql.connection.cursor()
        json = request.get_json()
        id = json.get('id')
        cur.execute(f'Select * from blog where id = {id}')
        res = cur.fetchall()
        sql = f'Delete from blog where id = {id}'
        cur.execute(sql)
        mysql.connection.commit()
        cur.close()
        return f'Deleted data successfully:\nId: {res[0][0]}\nTitle: {res[0][1]}\nContent: {res[0][2]}'
    except Exception as e:
        return f"Error in deleting data: {e}"
    
@app.route('/get')
def getData():
    try:
        cur = mysql.connection.cursor()
        sql = 'select * from blog'
        cur.execute(sql)
        res = cur.fetchall()
        cur.close()
        return jsonify(res)
    except Exception as e:
        return f'Error in inserting data: {e}'

if __name__ == 'main':
    app.run()