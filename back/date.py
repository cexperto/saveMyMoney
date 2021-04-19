from flask import Flask, jsonify, request
import pyrebase

app = Flask(__name__)
my_port = 8080

firebaseConfig={
    "apiKey": "AIzaSyA0MJpFKk-XPpBrEEW3hzOaNJFyCKEaW0U",
    "authDomain": "savemymoney-349c8.firebaseapp.com",
    "databaseURL": "https://savemymoney-349c8-default-rtdb.firebaseio.com",
    "projectId": "savemymoney-349c8",
    "storageBucket": "savemymoney-349c8.appspot.com",
    "messagingSenderId": "106401718513",
    "appId": "1:106401718513:web:0a4d8fd9366fad9779c950",
    "measurementId": "G-M8WQLE16XF"
}

firebase=pyrebase.initialize_app(firebaseConfig)
db=firebase.database()

@app.route('/findDate', methods=['Post'])
def findDate():
    request_data = request.get_json()
    date = request_data['date']
    result = db.child("master-student").order_by_child("date").equal_to(date).get()
    # result = db.child("master-student").order_by_child("date").equal_to("12/04/2021").get()
    return result.val()


if __name__ == '__main__':
    app.run(debug=True, port=my_port)