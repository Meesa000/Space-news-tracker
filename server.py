from flask import Flask, render_template, jsonify
from get_data import get_latest_articles



app = Flask(__name__)

@app.route("/")
def display_homepage():
    
    
    
    return render_template('index.html')

@app.route("/get_data")
def data():
    articles_list = get_latest_articles()
    return jsonify(articles_list)