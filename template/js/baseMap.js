var openStreetMap = L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href = "https://forms.office.com/Pages/DesignPageV2.aspx?origin=NeoPortalPage&subpage=design&id=74FucSK1c0SOMRC9Asz25aB7FRA37XhIktzs21VSNoJUOTZDNzQyT09BWTk5SDNaNU1YSEhaUDhZQSQlQCN0PWcu" target="_blank">Feedback</a> | <a href="https://docs.google.com/document/u/1/d/e/2PACX-1vQ7tHY3P16O92imd7jhnGjUzNa_541JKTFhr4G1iNtBySyymkoMy5pO-d153SXP81183X0cR0xq_iBH/pub#h.m64yhwybq6i0", target="_blank">About</a>',
    subdomains: ['a','b','c']});
	
openStreetMap.addTo(mymap);

/*
var sAndS = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZXphbmciLCJhIjoiY2prYmZ4MWRmMHdpeTNxdDRobzlzdzhqYiJ9.gH8NQVABBFmrMzf4IVX5fQ', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a> | Developed by <a href="www.linkedin.com/in/evan-zangakis">Evan Zangakis</a>',
		maxZoom: 18,
		id: 'mapbox.satellite',
		accessToken: 'pk.eyJ1IjoiZXphbmciLCJhIjoiY2prYmZ4MWRmMHdpeTNxdDRobzlzdzhqYiJ9.gH8NQVABBFmrMzf4IVX5fQ'
		});
sAndS.addTo(mymap);
*/