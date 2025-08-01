from flask import Flask, jsonify, request, render_template
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'roottoor'
app.config['MYSQL_DB'] = 'aravind_cse'

mysql = MySQL(app)

@app.route('/')
def hello_world():
    return 'Hello, world!'

@app.route('/data')
def get_data():
    cur = mysql.connection.cursor()
    cur.execute('Select * from user')
    results = cur.fetchall()
    cur.close()
    return jsonify(results)

@app.route('/myname')
def my_name():
    return 'Aravind Dakshan D'

@app.route('/myname/<name>')
def hello_name(name):
    return 'Hello! ' + name

@app.route('/json/<name>')
def hello_json(name):
    return jsonify({"message": "hello", "name": name})

@app.route('/mydetails')
def my_details():
    name = request.args.get('name')
    city = request.args.get('city')
    address = request.args.get('address')
    return f'{name}, {city}, {address}'

@app.route('/form', methods=['get', 'post'])
def my_form():
    if request.method == 'POST':
        id = request.form.get('id')
        name = request.form.get('name')
        email = request.form.get('email')
        mobile = request.form.get('mobile')
        password = request.form.get('password')
        cur = mysql.connection.cursor()
        cur.execute('select count(id) from user where id=%s', (id,))
        count = cur.fetchall()
        if count[0][0] >= 1:
            return 'User already exists'
        
        sql = 'insert into user (id, name, email, mobile, password) values (%s, %s, %s, %s, %s)'
        val = (id, name, email, mobile, password)
        cur.execute(sql, val)
        mysql.connection.commit()
        cur.close()
        return f""" Saved Data in DB
          Recieved data:
        Id: {id}
        Name: {name}
        Email: {email}
        Mobile: {mobile}
        Password: {password}   """
        
    else:
        return render_template('index.html')
    
@app.route('/getData')
def getData():
    cur = mysql.connection.cursor()
    cur.execute('Select * from user')
    data = cur.fetchall()
    cur.close()
    return render_template('data.html', data = data)

@app.route('/getDataById')
def getDataById():
    id = request.args.get('id')
    sql = ''
    if id is not None:
        sql = f'Select * from user where id = {id}'
    else:
        sql = 'Select * from user'
    cur = mysql.connection.cursor()
    cur.execute(sql)
    data = cur.fetchall()
    cur.close()
    return render_template('data.html', data=data)

@app.route('/user-register')
def userDetail():
    id = request.args.get('id')
    sql = f'select * from user where id = {id}'
    cur = mysql.connection.cursor()
    cur.execute(sql)
    res = cur.fetchall()
    cur.close()
    return render_template('user_detail.html', id=res[0][0],
                            name=res[0][1], email=res[0][2], password=res[0][3])


if __name__ == '__main__':
    app.run()