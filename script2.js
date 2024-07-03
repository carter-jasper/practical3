// Initialize the map and set its view to a given place and zoom level
var map = L.map('map').setView([-0.090081, 34.76572], 8);

// Set up the OSM layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Custom hover popups for areas
var customTooltip = "Kisumu, Kenya";

// Function to create and return a marker with a permanent tooltip
function createHoverMarker(lat, lng, tooltipContent) {
    var marker = L.marker([lat, lng]).addTo(map);

    // Bind tooltip for permanent display above the marker
    marker.bindTooltip(tooltipContent, { 
        permanent: true, 
        direction: 'top', 
        offset: [-12, -12]  // Adjust offset to position the tooltip above the marker
    });

    return marker;
}

// Create marker with a permanent tooltip
createHoverMarker(-0.090081, 34.76572, customTooltip);





