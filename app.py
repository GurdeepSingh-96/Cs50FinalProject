import os
from flask import Flask, jsonify, request
from flask import render_template
import requests
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/weather")
def get_weather():
    # get the city
    city = request.args.get("city")

    # check anf handle in case miss the city
    if not city:
        return jsonify({"error":"Please enter a city name"}), 400
    
    # get API Key
    api_key = os.getenv("WEATHER_API_KEY")

    # API call
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
    response = requests.get(url)
    
    return jsonify(response.json())