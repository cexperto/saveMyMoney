from flask import Flask, jsonify, request

# app for server
app = Flask(__name__)
my_port = 8080
# initialize the server
    
# function allow us connect to firebase database
def conection():
    from firebase import firebase
    url = "https://savemymoney-349c8-default-rtdb.firebaseio.com/"
    firebase = firebase.FirebaseApplication(url,None)
    # read from db ('url', params)
    read = firebase.get('','')
    print(read)

@app.route('/')
def ping():
    return jsonify({"message": "Welcome to: save my money API"})

# route what allow us get all register for our firebase DB
    # read from db ('url', params)
    # print(read)
    # return json format with jsonify
@app.route('/expenses', methods=['Get'])
def getExpenses():
    from firebase import firebase
    url = "https://savemymoney-349c8-default-rtdb.firebaseio.com/"
    firebase = firebase.FirebaseApplication(url,None)
    read = firebase.get('','')
    return jsonify(read)


if __name__ == '__main__':
    app.run(debug=True, port=my_port)