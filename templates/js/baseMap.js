// Create an OpenStreetMap tile layer using Leaflet
var openStreetMap = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', // Tile URL pattern
    {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | ' + // OpenStreetMap information
                     '<a href="https://forms.office.com/r/NEcbte1TLB" target="_blank">Feedback</a> | ' +  // SLF Feedback Form
                     '<a href="https://www.youtube.com/watch?v=guCxeNT-YqA" target="_blank">About</a> |' + // Video tutorial on how to use pestHubMaps
                     '<a href="images/pestHubMap_HelpFile.pdf", target="_blank">Help</a>', // Help file for pestHubMaps
        subdomains: ['a', 'b', 'c'] // Load tiles from different subdomains for faster loading
    }
);

// Add the OpenStreetMap tile layer to the map
openStreetMap.addTo(mymap);


