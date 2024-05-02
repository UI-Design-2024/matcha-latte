from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
from flask import redirect, url_for
from datetime import datetime

import json
import re

app = Flask(__name__)

data = []

quiz_data = {
    "1": {
        "question": "You are hosting a traditional Japanese tea ceremony and your guest asks about the importance of the chasen (bamboo whisk) and chawan (tea bowl) in matcha preparation. How would you explain?",
        "choices": ["Chasen: to measure the matcha powder. Chawan: to maintain the water’s temperature", "Chasen: to create a frothy consistency in the matcha. Chawan: to provide a wide surface area for whisking.", "Chasen: to evenly dissolve the matcha powder, creating a velvety texture. Chawan: to serve as a vessel for presenting the tea.", "Chasen: to ensure the proper infusion of flavors in the matcha. Chawan: to symbolize harmony and respect in the tea ceremony."],
        "correct_answer": 2 
    },
    "2": {
        "question": "How would you assess the quality of matcha before making a purchase?",
        "choices": ["Look for a vibrant green, sweet umami aroma, and smooth texture.", "Only examine the color variations as that is the main indicator of different grades of matcha.", "Perform a taste test of the powder directly to detect flavor notes.", "Inspect the powder’s ability to form a stable suspension in water."],
        "correct_answer": 0,
        "image": "quiz2.png"
    },
    "3": {
       "question": "While preparing the matcha, you accidentally use water that's too hot. How would you salvage the situation without compromising the matcha flavor and texture?",
       "choices": ["Rapidly cool the matcha using ice.", "Wait ten minutes for the matcha to cool and continue to serve it to your guests.", "Whisk faster to aerate it, enhancing its texture and mouthfeel.", "Prepare a secondary batch of matcha using lower temperature water and blend it with the initial batch."],
       "correct_answer": 3,
       "image": "quiz3.png"
    },
    "4": {
       "question": "You want to bring matcha with you to enjoy for a hiking trip. What tools would you recommend for preparing traditional matcha on-the-go?",
       "choices": ["Pack a compact bamboo matcha whisk and matcha bowl, along with an insulated flask for warm water.", "For simplicity, utilize pre-packaged unwhisked matcha packets.", "Opt for instant matcha powder and a battery-operated milk frother.", "Choose a traditional matcha whisk made of bamboo and a ceramic matcha bowl for authenticity."],
       "correct_answer": 0
    }
}

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
   return render_template('welcome.html')

@app.route('/stir')
def stir():
   return render_template('stir_demo.html')

@app.route('/learn')
def learn():
   return render_template('learn.html')

@app.route('/results')
def results():
   return render_template('quizResult.html')

@app.route('/quiz_home')
def quiz_home():
   return render_template('quiz_home.html')

@app.route('/quiz/<int:quiz_id>')
def quiz(quiz_id):
    quiz = quiz_data.get(str(quiz_id))
    if not quiz:
        return "Quiz not found", 404
    
    prev_quiz_id = str(quiz_id - 1) if quiz_id > 1 else None
    next_quiz_id = str(quiz_id + 1) if str(quiz_id + 1) in quiz_data else None
    
    return render_template('quiz.html', quiz_id=quiz_id, quiz=quiz, prev_quiz_id=prev_quiz_id, next_quiz_id=next_quiz_id)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404
    
if __name__ == '__main__':
   app.run(debug = True)




