document.getElementById('searchBtn').addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value; 
    const resultDiv = document.getElementById('weatherResult');

    if (!city) {
        alert("Please enter a city");
        return;
    }

    try {
        const response = await fetch(`/weather?city=${city}`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        
        const data = await response.json(); // La variabile vive qui dentro

        if (data.cod !== 200) {
            throw new Error(data.message || "City not found");
        }

        // Cambio stile dinamico
        const weatherMain = data.weather[0].main; 
        document.body.className = ''; 
        document.body.classList.add(weatherMain.toLowerCase());

        // Visualizzazione risultati
        resultDiv.innerHTML = `
            <h3>Weather in ${data.name}</h3>
            <p>Temperature: ${data.main.temp.toFixed(0)}°C</p>
            <p>Condition: ${data.weather[0].description}</p>
        `;

    } catch (error) {
        alert("Error: " + error.message);
    }


})
    // start search with "Enter" key
document.getElementById('cityInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('searchBtn').click();
    }
});