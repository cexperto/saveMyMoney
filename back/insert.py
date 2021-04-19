from flask import Flask, jsonify, request, render_template
# app for server
# initialize the server
app = Flask(__name__)
my_port = 8080

# from data import data

# function allow us connect to firebase database
def conection():
    from firebase import firebase
    url = "https://savemymoney-349c8-default-rtdb.firebaseio.com/"
    firebase = firebase.FirebaseApplication(url,None)
    # read from db ('url', params)
    read = firebase.get('','')
    print(read)


# roure for insert data from front app
@app.route('/insert_expense', methods=['POST'])
# function for insert data
def insert_expense():
    try:        
        from firebase import firebase
        url = "https://savemymoney-349c8-default-rtdb.firebaseio.com/"
        firebase = firebase.FirebaseApplication(url,None)    
        request_data = request.get_json()
        
        # 
        # return 'ok', 200
        if('date' in request_data and 'money' in request_data and 'place' in request_data):
            try:
                ins_data = firebase.post('master-student', request_data)
                return 'ok',200
            except ValueError:
                'something happend'
        else:
            return 'invalid data'
    except ValueError:
        return 'something happend'
            
    
if __name__ == '__main__':
    app.run(debug=True, port=my_port)