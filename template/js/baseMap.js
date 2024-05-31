var openStreetMap = L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href = "https://forms.office.com/r/NEcbte1TLB" target="_blank">Feedback</a> | <a href="https://www.youtube.com/watch?v=guCxeNT-YqA", target="_blank">About</a>',
    subdomains: ['a','b','c']});
	
openStreetMap.addTo(mymap);

