from flask import Flask, request
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
        title = request.form['title']
        content = request.form['content']
        sql = 'insert into blog (title, content) values (%s, %s)'
        val = (title, content)
        cur.execute(sql, val)
        mysql.connection.commit()
        cur.close()
        return 'success'
    except Exception as e:
        return f'Error in inserting data: {e}'

if __name__ == 'main':
    app.run()