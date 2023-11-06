from flask import Flask, jsonify, request, g
from flask_cors import CORS
import sqlite3
from user import User

app = Flask(__name__)
CORS(app)
DATABASE = '../db/database.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    return (rv[0] if rv else None) if one else rv

def init_db():
    with app.app_context():
        db = get_db()
        with app.open_resource('../db/schema.sql', mode='r') as f:
            db.cursor().executescript(f.read())
        db.commit()

@app.route('/')
def index():
    return jsonify({'message': 'Welcome to the Course Management System'})

@app.route('/api/user/<int:id>')
def get_user(id):
    user = query_db('SELECT * FROM users WHERE id=(?)', [id], one=True)
    if user is None:
        return jsonify({'message': 'User not found'}), 404
    else:
        user_obj = User(user[0], user[1], user[2])
        return jsonify([user_obj.to_dict()])

@app.route('/api/user', methods=['POST'])
def add_user():
    email = request.json['email']
    course = request.json['course']
    query_db('INSERT INTO users (email, course) VALUES (?, ?)', [email, course])
    get_db().commit()
    return jsonify({'message': 'User added successfully'}), 201


if __name__ == '__main__':
    init_db()  # Initialize the database
    app.run(debug=True)
