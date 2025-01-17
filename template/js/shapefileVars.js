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
            weight: 0.5
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
var legendScheme = ['#FFFFFF', '#E2E2E2', '#C6C6C6', '#AAAAAA', '#8D8D8D', '#717171', '#555555', '#383838', '#1C1C1C', '#000000']

var legend = L.control({ position: 'bottomleft' });
legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend');
     div.innerHTML = "Risk";

    // Check if the screen is small (mobile device)
    if (window.innerWidth < 600) {
        div.style.fontSize = '10px'; 
        div.style.width = '20px'; 
        div.style.textAlign = 'center'; // Center the text

         for (var i = legendScheme.length - 1; i >= 0; i--) {
            var marginBottom = '0';

            div.innerHTML +=
                '<div style="width: 10px; height: 10px; background:' + legendScheme[i] + '; margin-bottom: ' + marginBottom + '; margin: 0 auto; opacity: 0.7;"></div>';
        }
    } else {

        for (var i = legendScheme.length - 1; i >= 0; i--) {
            div.innerHTML +=
                '<br><i style="background:' + legendScheme[i] + '"></i>';
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
            weight: 0.5
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
"<strong>Transport</strong>": hubs,
"<strong>Establishment</strong>" : maxent,
"<strong> Railways</strong>": railways,
"<strong>Vineyard Area</strong>": impact,
"<strong>County Lines</strong>": labeledCount,
"<em>Adams (grid)</em>": bindedCounties[0], 
"<em>Allegheny</em>": bindedCounties[1], 
"<em>Armstrong</em>": bindedCounties[2],
"<em>Beaver</em>": bindedCounties[3],
"<em>Bedford</em>": bindedCounties[4],
"<em>Berks</em>": bindedCounties[5],
"<em>Blair</em>": bindedCounties[6],
"<em>Bradford</em>": bindedCounties[7],
"<em>Bucks</em>": bindedCounties[8],
"<em>Butler</em>": bindedCounties[9],
"<em>Cambria</em>": bindedCounties[10],
"<em>Cameron</em>": bindedCounties[11],
"<em>Carbon</em>": bindedCounties[12],
"<em>Centre</em>": bindedCounties[13],
"<em>Chester</em>": bindedCounties[14],
"<em>Clarion</em>": bindedCounties[15],
"<em>Clearfield</em>": bindedCounties[16],
"<em>Clinton</em>": bindedCounties[17],
"<em>Columbia</em>": bindedCounties[18],
"<em>Crawford</em>": bindedCounties[19],
"<em>Cumberland</em>": bindedCounties[20],
"<em>Dauphin</em>": bindedCounties[21],
"<em>Delaware</em>": bindedCounties[22],
"<em>Elk</em>": bindedCounties[23],
"<em>Erie</em>": bindedCounties[24],
"<em>Fayette</em>": bindedCounties[25],
"<em>Forest</em>": bindedCounties[26],
"<em>Franklin</em>": bindedCounties[27],
"<em>Fulton</em>": bindedCounties[28],
"<em>Greene</em>": bindedCounties[29],
"<em>Huntingdon</em>": bindedCounties[30],
"<em>Indiana</em>": bindedCounties[31],
"<em>Jefferson</em>": bindedCounties[32],
"<em>Juniata</em>": bindedCounties[33],
"<em>Lackawanna</em>": bindedCounties[34],
"<em>Lancaster</em>": bindedCounties[35],
"<em>Lawrence</em>": bindedCounties[36],
"<em>Lebanon</em>": bindedCounties[37],
"<em>Lehigh</em>": bindedCounties[38],
"<em>Luzerne</em>": bindedCounties[39],
"<em>Lycoming</em>": bindedCounties[40],
"<em>McKean</em>": bindedCounties[41],
"<em>Mercer</em>": bindedCounties[42],
"<em>Mifflin</em>": bindedCounties[43],
"<em>Monroe</em>": bindedCounties[44],
"<em>Montgomery</em>": bindedCounties[45],
"<em>Montour</em>": bindedCounties[46],
"<em>Northampton</em>": bindedCounties[47],
"<em>Northumberland</em>": bindedCounties[48],
"<em>Perry</em>": bindedCounties[49],
"<em>Philadelphia</em>": bindedCounties[50],
"<em>Pike</em>": bindedCounties[51],
"<em>Potter</em>": bindedCounties[52],
"<em>Schuylkill</em>": bindedCounties[53],
"<em>Snyder</em>": bindedCounties[54],
"<em>Somerset</em>": bindedCounties[55],
"<em>Sullivan</em>": bindedCounties[56],
"<em>Susquehanna</em>": bindedCounties[57],
"<em>Tioga</em>": bindedCounties[58],
"<em>Union</em>": bindedCounties[59],
"<em>Venango</em>": bindedCounties[60],
"<em>Warren</em>": bindedCounties[61],
"<em>Washington</em>": bindedCounties[62],
"<em>Wayne</em>": bindedCounties[63],
"<em>Westmoreland</em>": bindedCounties[64],
"<em>Wyoming</em>": bindedCounties[65],
"<em>York</em>": bindedCounties[66]
};



/************** Add Layer control ***********/
var emptyBase = {
};

L.control.layers(emptyBase, countyList).addTo(mymap);
/**********************************************************************************/

