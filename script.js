// In this example, we initialize a simple Leaflet map with a marker for demonstration

// Initialize the map
var map = L.map('map').setView([-6.73, 105.63], 8);

// Add OpenStreetMap as base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.google.com/maps/@-5.3641216,105.2934144,12z?entry=ttu'
}).addTo(map);

// Add a marker for example
L.marker([-6.73, 105.63]).addTo(map)
    .bindPopup('Contoh Titik Gempa di Selat Sunda')
    .openPopup();