
//Comment out the code below if the app is a County app
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

//Comment out the code below if the app is not County app
var mapboxSatelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWdzbWl0aCIsImEiOiJjbHRzeHNmdGIwdGViMmprOG5keXlrbGYwIn0.QeV2H_Y4QN8AFQ5B10JnqA', {
    attribution: 'Map data &copy; <a href="https://www.mapbox.com/">Mapbox</a> | <a href = "https://forms.office.com/r/NEcbte1TLB" target="_blank">Feedback</a> | <a href="https://www.youtube.com/watch?v=guCxeNT-YqA", target="_blank">About</a> | <a href="images/pestHubMap_HelpFile.pdf", target="_blank">Help</a>',
    subdomains: ['a','b','c'],
    tileSize: 512,
    maxZoom: 20,
    zoomOffset: -1
});

mapboxSatelliteStreets.addTo(mymap);


//---------------------------------------------------- Help Button ---------------------------------
L.Control.Help = L.Control.extend({
    onAdd: function(map) {
      const btn = L.DomUtil.create('button', 'leaflet-bar');
      btn.style.backgroundColor = 'white';
      btn.style.width = '70px';
      btn.style.height = '70px';

      const img = document.createElement('img');
      img.src = 'images/help.png'; // path to your help icon
      img.alt = 'Help';
      img.style.width = '90%';
      img.style.height = '90%';
      img.style.objectFit = 'contain';
      img.style.pointerEvents = 'none'; // Prevent click from hitting image instead of button

    btn.appendChild(img);

  
      btn.onclick = function () {
        window.open('images/pestHubMap_HelpFile.pdf');
      };
  
      return btn;
    },
    onRemove: function(map) {}
  });
  
  L.control.Help = function(opts) {
    return new L.Control.Help(opts);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    L.control.Help({ position: 'bottomright' }).addTo(mymap);
  });


  //---------------------------------------------------- Refresh Button-------------------------------------------------
	L.Control.Refresh = L.Control.extend({
    onAdd: function(map) {
      const btn = L.DomUtil.create('button', 'leaflet-bar');
      btn.style.backgroundColor = 'white';
      btn.style.width = '70px';
      btn.style.height = '70px';

      const img = document.createElement('img');
      img.src = 'images/refresh.png'; // path to your refresh icon
      img.alt = 'Refresh';
      img.style.width = '90%';
      img.style.height = '90%';
      img.style.objectFit = 'contain';
      img.style.pointerEvents = 'none'; // Prevent click from hitting image instead of button

    btn.appendChild(img);

  
      btn.onclick = function () {
        location.reload();
      };
  
      return btn;
    },
    onRemove: function(map) {}
  });
  
  L.control.refresh = function(opts) {
    return new L.Control.Refresh(opts);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    L.control.refresh({ position: 'bottomright' }).addTo(mymap);
  });
