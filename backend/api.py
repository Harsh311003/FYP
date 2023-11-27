# importing libararies and modules
from flask import Flask, jsonify, request


# creating an app
app = Flask(__name__)



#create endpoints
@app.route('/',methods=['GET'])
def home():
    return jsonify({ 'error' : "wrong endpoint"})


@app.route('/result',methods=['POST'])
def result():
    if request.method=='POST':
        return jsonify({'result' : request.json})


if __name__== '__main__':
    app.run(debug=True)