from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
from flask import redirect, url_for
from datetime import datetime

import json
import re

app = Flask(__name__)

data = []

@app.get("/api/health")
def get_health():
    t = str(datetime.now())
    msg = {
        "name": "Matcha-Latte",
        "health": "Good",
        "at time": t
    }

    result = Response(json.dumps(msg), status=200, content_type="application/json")
    return result

@app.route('/')
def hello_world():
   return render_template('stir_demo.html')

@app.route('/stir')
def stir():
   return render_template('stir_demo.html')

@app.route('/learn')
def learn():
   return render_template('learn.html')

@app.route('/quiz')
def quiz():
   return render_template('quiz.html')



if __name__ == '__main__':
   app.run(debug = True)




