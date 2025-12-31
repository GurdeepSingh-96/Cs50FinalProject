# FiftyWeather
#### Video Demo: [<https://youtu.be/QfxwjuGk4Ic>]
#### Description:

## Overview
**FiftyWeather** is a full-stack web application that I developed as the final project for CS50’s Introduction to Computer Science. The application provides users with real-time weather information for any city globally by utilizing the OpenWeatherMap API. FiftyWeather features an adaptive User Interface that transforms its visuals based on the current atmospheric conditions of the searched location.

## Why?
The goal of this project was to apply as many notions as possible from the CS50 curriculum, focusing primarily on web development while utilizing Python and Flask. For me, this project is about filling the gaps in my knowledge and learning to build something from scratch without relying heavily on distribution code. Even in this fundamental form, it served as an excellent way to begin thinking about full-stack architecture by effectively linking the backend and frontend.

## Features

### 1. Real-Time Data Fetching
The core of the application is its integration with the OpenWeatherMap API. When a user submits a city name, the Flask backend communicates with the API to retrieve meteorological data securely.

### 2. Adaptive Background 
The standout feature of FiftyWeather is its dynamic CSS system. Using JavaScript, the application parses the "Main" weather condition returned by the API such as Clear, Clouds, Rain, or Snow—and updates the `body` class of the HTML document. This triggers custom CSS linear gradients:
* **Clear Skies:** blue gradient.
* **Clouds:**  grey-blue.
* **Rain/Drizzle:**  teals and greys.
* **Thunderstorm:** Dark, high-contrast blues.
* **Snow:** whites and light blues.
* **Atmospheric (Mist/Fog):** silver tones.

### 3. UX (User Experience)
To ensure the app feels modern and responsive, several UX features were implemented:
* **Enter to Search:** Users can trigger a search by pressing the "Enter" key, implemented via JavaScript event listeners.
* **Clean Data Formatting:** Temperatures are rounded to the nearest whole number using JavaScript's `.toFixed(0)` method to provide a minimal and simple experience.
* **Glassmorphism UI:** The main interface is contained within a "container" class that uses `rgba` coloring and transparency principles to remain legible against the dynamic backgrounds.

## File Structure and Implementation

### `app.py`
This is the core of the backend, using **Flask** to route the application. It features a primary route to serve the index page and a specific `/weather` route. This route handles the secret `WEATHER_API_KEY` securely by loading it from environment variables, fetches data from the external provider using the `requests` library, and returns a JSON response to the frontend.

### `index.html`
A clean HTML structure that serves as the skeleton for the app. It contains the input fields and the result display area. It utilizes Jinja2 syntax to link static assets like CSS and JavaScript files.

### `style.css`
This file contains the visual logic of the application. It defines base layouts using Flexbox to ensure the app is centered and responsive across mobile and desktop devices. It also contains the specific weather classes used for smooth dynamic background transitions.

### `script.js`
This handles all client-side logic. It manages asynchronous `fetch` calls to the Flask server, updates the DOM with retrieved weather data, and listens for user input events like clicks and keypresses.

### `requirements.txt`
Lists all Python dependencies, such as Flask, Requests, and Python-dotenv, ensuring the project can be easily replicated in any local environment.

## Installation and Setup
To run FiftyWeather locally, follow these steps:
1. Clone the repository.
2. Install dependencies: `pip install -r requirements.txt`.
3. Create a `.env` file in the root directory and add your OpenWeatherMap API Key(can get a free key from OpenWeather official site, with a free account.IMPORTANT keep in mind the key would require some hours before being activated.):
   `WEATHER_API_KEY=your_key_here`
4. Run the Flask application: `flask run`.

## Design Choices
One significant design choice was moving the API call from the frontend to the backend. This is a safety precaution; doing the API call on the frontend would expose the API key to anyone viewing the source code. By routing the request through `app.py`, I ensured the application follows security best practices a key takeaway from the CS50 curriculum. Another challenge was handling the CSS transitions. I utilized CSS transitions on the `body` tag to ensure that as weather conditions change, the color shift feels fluid rather than abrupt.

## Future Updates
I plan to keep updating and improving this app with more features, especially regarding the CSS to make it even more aesthetically pleasing. I would also like to add features such as weekly forecasts, air quality indices, and pollution levels. Finally, I intend to implement a geolocation feature to detect the user's city automatically.

## Reflections
During the ralization of this project I learn to better use external resources and tools, like flask a little bit of Jinja, also learn some "better" ways to implement API calls like the use of .env(`python-dotenv`),for security reasons, or the use of venv and various python libraries like the one listed above or in the requirements.txt attached in the project files.

During the coding of `script.js`, I encountered the challenge of managing asynchronous data. Because the application relies on an external API, the response is not instantaneous. I had to ensure that the UI provided a seamless experience while waiting for data. This reinforced my understanding of JavaScript's `async/await` syntax and the importance of error handling using `try/catch` blocks. If a user provides an invalid city name, the application is designed to catch the error returned by the server and display an alert, preventing the script from breaking silently.

The CSS implementation was another area of significant learning. The "Glass-morphism" effect—created allows the container to "pop" off the page regardless of whether the background is a bright (sunny blue) or a dark (thunderstorm grey). This taught me about the importance of accessibility and visual contrast in web design, an area where I'm not very good and where I plan to invest of my time and future study hours.  

Finally, implementing the "Enter" key listener was a small but necessary point in terms of UX. It required me to think about how I intuitively interact with a search bar. By linking the `keypress` event to the search button's existing functionality, I was able to maintain clean, DRY (Don't Repeat Yourself) code while significantly improving the feel of the app. 