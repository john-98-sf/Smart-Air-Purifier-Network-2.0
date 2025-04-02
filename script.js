// Simulating air quality data
const airQualityData = {
    PM2_5: 15,
    CO2: 400,
    AQI: 75
  };
  
  // Function to update the air quality dashboard
  function updateDashboard() {
    const airQualityElement = document.getElementById('air-quality');
    airQualityElement.innerHTML = `
      <p>PM2.5: ${airQualityData.PM2_5} µg/m³</p>
      <p>CO2: ${airQualityData.CO2} ppm</p>
      <p>AQI: ${airQualityData.AQI}</p>
    `;
  }
  
  // Event listener for the "Update Data" button
  document.getElementById('update').addEventListener('click', function() {
    // Simulate new data fetch
    airQualityData.PM2_5 += Math.floor(Math.random() * 10);
    airQualityData.CO2 += Math.floor(Math.random() * 20);
    airQualityData.AQI += Math.floor(Math.random() * 5);
    updateDashboard();
  });
  
  // Function to initialize the map
  function initMap() {
    const map = L.map('map-container').setView([51.505, -0.09], 13); // Default coordinates
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    // Simulate purifier location
    L.marker([51.505, -0.09]).addTo(map)
      .bindPopup('Air Purifier Location')
      .openPopup();
  }
  
  // Call map initialization when page is loaded
  document.addEventListener('DOMContentLoaded', initMap);
  
  // Event listener for "Contribute" button
  document.getElementById('contribute').addEventListener('click', function() {
    alert('Thank you for contributing to the air purifier fund!');
  });
  /////////////////////////////////////////////////////////

  