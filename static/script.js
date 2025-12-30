document.getElementById('searchBtn').addEventListener('click', async () => {
    const city = document.getElementById('cityInput').value; // CORRETTO: .value
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
            throw new Error(data.message || "Città non trovata");
        }

        // Cambio stile dinamico
        const weatherMain = data.weather[0].main; 
        document.body.className = ''; 
        document.body.classList.add(weatherMain.toLowerCase());

        // Visualizzazione risultati
        resultDiv.innerHTML = `
            <h3>Meteo a ${data.name}</h3>
            <p>Temperatura: ${data.main.temp}°C</p>
            <p>Condizione: ${data.weather[0].description}</p>
        `;

    } catch (error) {
        alert("Error: " + error.message);
    }
});