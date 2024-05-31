/************** Establishment Layer *************/
var establishment = new L.Shapefile("shapefiles/establishment_risk.zip");


var colorScheme = ['#fff5f0','#fee0d2','#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d','#a50f15','#67000d', '#360007'];
function writeStyle() {
    establishment.setStyle(function (feature) {
        var val = feature.properties.estbls_;
        var shade = val <= 0.1 ? colorScheme[0] :
                    val <= 0.2 ? colorScheme[1] :
                    val <= 0.3 ? colorScheme[2] :
                    val <= 0.4 ? colorScheme[3] :
                    val <= 0.5 ? colorScheme[4] :
                    val <= 0.6 ? colorScheme[5] :
                    val <= 0.7 ? colorScheme[6] :
                    val <= 0.8 ? colorScheme[7] :
                    val <= 0.9 ? colorScheme[8] :
                                 colorScheme[0];

        return {
            fillColor: shade,
            fillOpacity: 0.7,
            color: 'white',
            weight: 1
        };
    });
}
establishment.on('data:loaded', writeStyle).addTo(mymap);
establishment.on('data:loaded', establishment.bindPopup(function(layer){
						var mean = Math.round((layer.feature.properties.estbls_) *10);
						var listed =  "<dd>Subdivision: " +layer.feature.properties.NAME+"<br> Risk (0-10): "+ mean +"</dd>";
						return listed;
					})
);

// Legend
var legend = L.control({ position: 'bottomleft' });
legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend');
     div.innerHTML = "Risk";

    // Check if the screen is small (mobile device)
    if (window.innerWidth < 600) {
        div.style.fontSize = '10px'; 
        div.style.width = '20px'; 
        div.style.textAlign = 'center'; // Center the text

         for (var i = colorScheme.length - 1; i >= 0; i--) {
            var marginBottom = '0';

            div.innerHTML +=
                '<div style="width: 10px; height: 10px; background:' + colorScheme[i] + '; margin-bottom: ' + marginBottom + '; margin: 0 auto; opacity: 0.7;"></div>';
        }
    } else {

        for (var i = colorScheme.length - 1; i >= 0; i--) {
            div.innerHTML +=
                '<br><i style="background:' + colorScheme[i] + '"></i>';
        }
    }

    div.innerHTML += "</div>";

    return div;
};

legend.addTo(mymap);

/*********** Hub Density ************/
var hubs = new L.Shapefile("shapefiles/hub_density.zip");

function writeHubsStyle() {
    hubs.setStyle(function (feature) {
        var hubsval = feature.properties.hub_count;
        var shade = hubsval === 0 ? colorScheme[0] :
                    hubsval <= 1 ? colorScheme[1] :
                    hubsval <= 2 ? colorScheme[2] :
                    hubsval <= 3 ? colorScheme[3] :
                    hubsval <= 4 ? colorScheme[4] :
                    hubsval <= 5 ? colorScheme[5] :
                    hubsval <= 10 ? colorScheme[6] :
                    hubsval < 100 ? colorScheme[7] :
                    hubsval >= 100 ? colorScheme[8] :
                                 colorScheme[0];

        return {
            fillColor: shade,
            fillOpacity: 0.7,
            color: 'white',
            weight: 1
        };
    });
}
hubs.on('data:loaded', writeHubsStyle);
hubs.on('data:loaded', hubs.bindPopup(function(layer){
						var hubslisted =  "<dd>Subdivision: " +layer.feature.properties.NAME+"<br> Number of Hubs: "+ layer.feature.properties.hub_count +"</dd>";
						return hubslisted;
					})
);

/************** County Outlines *************/
var counties = new L.Shapefile('shapefiles/county_outline.zip');

//add popups
var labeledCount =counties.bindPopup(function(layer){
		var listed =  "<dd>"+layer.feature.properties.NAME + " County" +"</dd>"
		return listed
})

/*********** County 1km Grids ************/

var countyShapefiles = 
[
    Adams = new L.Shapefile('shapefiles/county_1km_grids/Adams.zip'),
    Allegheny = new L.Shapefile('shapefiles/county_1km_grids/Allegheny.zip'),
    Armstrong = new L.Shapefile('shapefiles/county_1km_grids/Armstrong.zip'),
    Beaver = new L.Shapefile('shapefiles/county_1km_grids/Beaver.zip'),
    Bedford = new L.Shapefile('shapefiles/county_1km_grids/Bedford.zip'),
    Berks = new L.Shapefile('shapefiles/county_1km_grids/Berks.zip'),
    Blair = new L.Shapefile('shapefiles/county_1km_grids/Blair.zip'),
    Bradford = new L.Shapefile('shapefiles/county_1km_grids/Bradford.zip'),
    Bucks = new L.Shapefile('shapefiles/county_1km_grids/Bucks.zip'),
    Butler = new L.Shapefile('shapefiles/county_1km_grids/Butler.zip'),
    Cambria = new L.Shapefile('shapefiles/county_1km_grids/Cambria.zip'),
    Cameron = new L.Shapefile('shapefiles/county_1km_grids/Cameron.zip'),
    Carbon = new L.Shapefile('shapefiles/county_1km_grids/Carbon.zip'),
    Centre = new L.Shapefile('shapefiles/county_1km_grids/Centre.zip'),
    Chester = new L.Shapefile('shapefiles/county_1km_grids/Chester.zip'),
    Clarion = new L.Shapefile('shapefiles/county_1km_grids/Clarion.zip'),
    Clearfield = new L.Shapefile('shapefiles/county_1km_grids/Clearfield.zip'),
    Clinton = new L.Shapefile('shapefiles/county_1km_grids/Clinton.zip'),
    Columbia = new L.Shapefile('shapefiles/county_1km_grids/Columbia.zip'),
    Crawford = new L.Shapefile('shapefiles/county_1km_grids/Crawford.zip'),
    Cumberland = new L.Shapefile('shapefiles/county_1km_grids/Cumberland.zip'),
    Dauphin = new L.Shapefile('shapefiles/county_1km_grids/Dauphin.zip'),
    Delaware = new L.Shapefile('shapefiles/county_1km_grids/Delaware.zip'),
    Elk = new L.Shapefile('shapefiles/county_1km_grids/Elk.zip'),
    Erie = new L.Shapefile('shapefiles/county_1km_grids/Erie.zip'),
    Fayette = new L.Shapefile('shapefiles/county_1km_grids/Fayette.zip'),
    Forest = new L.Shapefile('shapefiles/county_1km_grids/Forest.zip'),
    Franklin = new L.Shapefile('shapefiles/county_1km_grids/Franklin.zip'),
    Fulton = new L.Shapefile('shapefiles/county_1km_grids/Fulton.zip'),
    Greene = new L.Shapefile('shapefiles/county_1km_grids/Greene.zip'),
    Huntingdon = new L.Shapefile('shapefiles/county_1km_grids/Huntingdon.zip'),
    Indiana = new L.Shapefile('shapefiles/county_1km_grids/Indiana.zip'),
    Jefferson = new L.Shapefile('shapefiles/county_1km_grids/Jefferson.zip'),
    Juniata = new L.Shapefile('shapefiles/county_1km_grids/Juniata.zip'),
    Lackawanna = new L.Shapefile('shapefiles/county_1km_grids/Lackawanna.zip'),
    Lancaster = new L.Shapefile('shapefiles/county_1km_grids/Lancaster.zip'),
    Lawrence = new L.Shapefile('shapefiles/county_1km_grids/Lawrence.zip'),
    Lebanon = new L.Shapefile('shapefiles/county_1km_grids/Lebanon.zip'),
    Lehigh = new L.Shapefile('shapefiles/county_1km_grids/Lehigh.zip'),
    Luzerne = new L.Shapefile('shapefiles/county_1km_grids/Luzerne.zip'),
    Lycoming = new L.Shapefile('shapefiles/county_1km_grids/Lycoming.zip'),
    McKean = new L.Shapefile('shapefiles/county_1km_grids/McKean.zip'),
    Mercer = new L.Shapefile('shapefiles/county_1km_grids/Mercer.zip'),
    Mifflin = new L.Shapefile('shapefiles/county_1km_grids/Mifflin.zip'),
    Monroe = new L.Shapefile('shapefiles/county_1km_grids/Monroe.zip'),
    Montgomery = new L.Shapefile('shapefiles/county_1km_grids/Montgomery.zip'),
    Montour = new L.Shapefile('shapefiles/county_1km_grids/Montour.zip'),
    Northampton = new L.Shapefile('shapefiles/county_1km_grids/Northampton.zip'),
    Northumberland = new L.Shapefile('shapefiles/county_1km_grids/Northumberland.zip'),
    Perry = new L.Shapefile('shapefiles/county_1km_grids/Perry.zip'),
    Philadelphia = new L.Shapefile('shapefiles/county_1km_grids/Philadelphia.zip'),
    Pike = new L.Shapefile('shapefiles/county_1km_grids/Pike.zip'),
    Potter = new L.Shapefile('shapefiles/county_1km_grids/Potter.zip'),
    Schuylkill = new L.Shapefile('shapefiles/county_1km_grids/Schuylkill.zip'),
    Snyder = new L.Shapefile('shapefiles/county_1km_grids/Snyder.zip'),
    Somerset = new L.Shapefile('shapefiles/county_1km_grids/Somerset.zip'),
    Sullivan = new L.Shapefile('shapefiles/county_1km_grids/Sullivan.zip'),
    Susquehanna = new L.Shapefile('shapefiles/county_1km_grids/Susquehanna.zip'),
    Tioga = new L.Shapefile('shapefiles/county_1km_grids/Tioga.zip'),
    Union = new L.Shapefile('shapefiles/county_1km_grids/Union.zip'),
    Venango = new L.Shapefile('shapefiles/county_1km_grids/Venango.zip'),
    Warren = new L.Shapefile('shapefiles/county_1km_grids/Warren.zip'),
    Washington = new L.Shapefile('shapefiles/county_1km_grids/Washington.zip'),
    Wayne = new L.Shapefile('shapefiles/county_1km_grids/Wayne.zip'),
    Westmoreland = new L.Shapefile('shapefiles/county_1km_grids/Westmoreland.zip'),
    Wyoming = new L.Shapefile('shapefiles/county_1km_grids/Wyoming.zip'),
    York = new L.Shapefile('shapefiles/county_1km_grids/York.zip')
];

//add popups
var bindedCounties = [];

for(var i=0; i<countyShapefiles.length; i++){
	var county =countyShapefiles[i].bindPopup(function(layer){
		var list =  "<dd>" + layer.feature.properties.NAMELSAD +"</dd>"
				+  "<dd>"+"USNG: " + layer.feature.properties.USNG + "</dd>"
		
		return list;
	});
	bindedCounties.push(county);
	}


/********** Layers grouped *********/
var countyList ={
	"ESTABLISHMENT" : establishment,
	"TRANSPORT" : hubs,
    "COUNTIES": labeledCount,
    "Adams" : bindedCounties[0],
    "Allegheny" : bindedCounties[1],
    "Armstrong" : bindedCounties[2],
    "Beaver" : bindedCounties[3],
    "Bedford" : bindedCounties[4],
    "Berks" : bindedCounties[5],
    "Blair" : bindedCounties[6],
    "Bradford" : bindedCounties[7],
    "Bucks" : bindedCounties[8],
    "Butler" : bindedCounties[9],
    "Cambria" : bindedCounties[10],
    "Cameron" : bindedCounties[11],
    "Carbon" : bindedCounties[12],
    "Centre" : bindedCounties[13],
    "Chester" : bindedCounties[14],
    "Clarion" : bindedCounties[15],
    "Clearfield" : bindedCounties[16],
    "Clinton" : bindedCounties[17],
    "Columbia" : bindedCounties[18],
    "Crawford" : bindedCounties[19],
    "Cumberland" : bindedCounties[20],
    "Dauphin" : bindedCounties[21],
    "Delaware" : bindedCounties[22],
    "Elk" : bindedCounties[23],
    "Erie" : bindedCounties[24],
    "Fayette" : bindedCounties[25],
    "Forest" : bindedCounties[26],
    "Franklin" : bindedCounties[27],
    "Fulton" : bindedCounties[28],
    "Greene" : bindedCounties[29],
    "Huntingdon" : bindedCounties[30],
    "Indiana" : bindedCounties[31],
    "Jefferson" : bindedCounties[32],
    "Juniata" : bindedCounties[33],
    "Lackawanna" : bindedCounties[34],
    "Lancaster" : bindedCounties[35],
    "Lawrence" : bindedCounties[36],
    "Lebanon" : bindedCounties[37],
    "Lehigh" : bindedCounties[38],
    "Luzerne" : bindedCounties[39],
    "Lycoming" : bindedCounties[40],
    "McKean" : bindedCounties[41],
    "Mercer" : bindedCounties[42],
    "Mifflin" : bindedCounties[43],
    "Monroe" : bindedCounties[44],
    "Montgomery" : bindedCounties[45],
    "Montour" : bindedCounties[46],
    "Northampton" : bindedCounties[47],
    "Northumberland" : bindedCounties[48],
    "Perry" : bindedCounties[49],
    "Philadelphia" : bindedCounties[50],
    "Pike" : bindedCounties[51],
    "Potter" : bindedCounties[52],
    "Schuylkill" : bindedCounties[53],
    "Snyder" : bindedCounties[54],
    "Somerset" : bindedCounties[55],
    "Sullivan" : bindedCounties[56],
    "Susquehanna" : bindedCounties[57],
    "Tioga" : bindedCounties[58],
    "Union" : bindedCounties[59],
    "Venango" : bindedCounties[60],
    "Warren" : bindedCounties[61],
    "Washington" : bindedCounties[62],
    "Wayne" : bindedCounties[63],
    "Westmoreland" : bindedCounties[64],
    "Wyoming" : bindedCounties[65],
    "York" : bindedCounties[66]
};



/************** Add Layer control ***********/
var emptyBase = {
};

L.control.layers(emptyBase, countyList).addTo(mymap);
/**********************************************************************************/

