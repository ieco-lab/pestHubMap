/************** Establishment Layer *************/
// Load establishment risk shapefile
var establishment = new L.Shapefile("shapefiles/establishment_risk.zip");

// Define color scheme for risk levels
var colorScheme = ['#fff5f0','#fee0d2','#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d','#a50f15','#67000d', '#360007'];

// Write style function for establishment layer
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

// Add establishment layer to map and bind popup with risk level information
establishment.on('data:loaded', writeStyle).addTo(mymap);
establishment.on('data:loaded', establishment.bindPopup(function(layer){
						var mean = Math.round((layer.feature.properties.estbls_) *10);
						var listed =  "<dd>Subdivision: " +layer.feature.properties.NAME+"<br> Risk (0-10): "+ mean +"</dd>";
						return listed;
					})
);

/************** Legend *************/
// Define legend color scheme
var legendScheme = ['#FFFFFF', '#E2E2E2', '#C6C6C6', '#AAAAAA', '#8D8D8D', '#717171', '#555555', '#383838', '#1C1C1C', '#000000']

// Add legend to map
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
// Load hub density shapefile
var hubs = new L.Shapefile("shapefiles/hub_density.zip");

// Write style function for hub density layer
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

// Add hub density layer to map and bind popup with hub density information
hubs.on('data:loaded', writeHubsStyle);
hubs.on('data:loaded', hubs.bindPopup(function(layer){
						var hubslisted =  "<dd>Subdivision: " +layer.feature.properties.NAME+"<br> Number of Hubs: "+ layer.feature.properties.hub_count +"</dd>";
						return hubslisted;
					})
);

/**Vineyard Acerage***/

//This shows the presence and absence of vineyards.

var vineyard = new L.Shapefile("shapefiles/grape_layer.zip");

var vineyardScheme = ['#F8F4F9','#E5D4E8','#D2B4D6','#BE93C5','#AB72B4','#9852A3','#853193','#721F82','#5F1271','#4C0E60'];

function vineyardStyle() {
    vineyard.setStyle(function (feature) {
        var grapeval = feature.properties.grp_vl_;
        var grapeshade = grapeval <= 1 ? vineyardScheme[0] :
                    grapeval <= 2 ? vineyardScheme[1] :
                    grapeval <= 3 ? vineyardScheme[2] :
                    grapeval <= 4 ? vineyardScheme[3] :
                    grapeval <= 5 ? vineyardScheme[4] :
                    grapeval <= 6 ? vineyardScheme[5] :
                    grapeval <= 7 ? vineyardScheme[6] :
					vineyardScheme[7];
		

        return {
            fillColor: grapeshade,
            fillOpacity: 0.7,
            color: 'white',
            weight: 0.5
        };
    });
}

vineyard.on('data:loaded', vineyardStyle).addTo(mymap);


vineyard.on('data:loaded', vineyard.bindPopup(function(layer) {
	var acreage = Math.round(layer.feature.properties.grp_vl_);
	var presence = acreage > 0 ? "Vineyard Area Present" : "Vineyard Area Absent";
    var info = presence + "</dd>";
    return info;
}));

var min_value = 0;

/*********** Survey Layer ***********/
//Originally named Trapping Effort, now renamed to Survey Effort

var surveyTOTAL = new L.Shapefile("shapefiles/density_survey.zip"); 


//SURVEY COLOR SCHEME 
var SurveycolorScheme = ['#f7fbff', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'];

function writeSurveyStyle(layer) {
    layer.setStyle(function (feature) {
        var srvy = feature.properties.srvy_cn;
        var shadeBlue = srvy == 0 ? SurveycolorScheme[0] :
                        srvy <= 1 ? SurveycolorScheme[1] :
                        srvy <= 3 ? SurveycolorScheme[2] :
                        srvy <= 5 ? SurveycolorScheme[3] :
                        srvy <= 7 ? SurveycolorScheme[4] :
                        srvy <= 10 ? SurveycolorScheme[5] :
                        srvy <= 20 ? SurveycolorScheme[6] :
                        srvy >= 30 ? SurveycolorScheme[7] :
                                    SurveycolorScheme[8] ;

        return {
            fillColor: shadeBlue,
            fillOpacity: 0.7,
            color: 'white',
            weight: 0.5
        };
    });
}
// ADDING COLOR SCHEME & POPUPS TO SURVEY LAYERS 
function bindPopupToSurveyLayer(layer, surveyYear) {
    layer.on('data:loaded', function () {
        writeSurveyStyle(layer);
    });

    layer.on('data:loaded', layer.bindPopup(function (layer) {
        var listed = `<dd>USNG: ${layer.feature.properties.USNG}<br> Number of Surveys: ${layer.feature.properties.srvy_cn}</dd>`;
        return listed;
    }));
}
bindPopupToSurveyLayer(surveyTOTAL, "ALL SURVEYS");

/*********** Density Layer ***********/

var densityTOTAL = new L.Shapefile("shapefiles/density_survey.zip");

//Density COLOR SCHEME 
var DensitycolorScheme = ['#fff5f0','#fee0d2','#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d','#a50f15','#67000d', '#360007'];

function writeDensityStyle(layer) {
    layer.setStyle(function (feature) {
        var dnst = feature.properties.max_pa;
        var shade = dnst == 0 ? DensitycolorScheme[0] : DensitycolorScheme[6];

        return {
            fillColor: shade,
            fillOpacity: 0.7,
            color: 'white',
            weight: 0.5
        };
    });
}


function bindPopupToDensityLayer(layer, densityYear) {
    layer.on('data:loaded', function () {
        writeDensityStyle(layer);
    });

    layer.on('data:loaded', layer.bindPopup(function (layer) {
        var presence = 
            layer.feature.properties.max_pa == 0 ? "SLF Absent" :
            "SLF Found";

        var listed = `<dd>USNG: ${layer.feature.properties.USNG}<br>${presence}</dd>`;
        return listed;
    }));
}

bindPopupToDensityLayer(densityTOTAL, "SLF Density");


/*********** Railways Layer **********/
var parails = new L.Shapefile("shapefiles/PaRailLines2023_10.zip");

var railwayStyle = {
    color: "red", // color of line
    weight: 5, // weight or thickness of the line
    opacity: 0.7 // opacity of line (0 for full transparency, 1 for full opacity)
};

// Create a feature group to combine both shapefiles
var railways = L.featureGroup();

// Set style and add Pennsylvania railways shapefile to the feature group
parails.once('data:loaded', function() {
    parails.setStyle(railwayStyle);
    railways.addLayer(parails);
});

// for big regions such as california, use below code

var shapefilePaths = [
    { path: "shapefiles/railways/Adams_railways.zip", name: "Adams" },
    { path: "shapefiles/railways/Ashland_railways.zip", name: "Ashland" },
    { path: "shapefiles/railways/Barron_railways.zip", name: "Barron" },
    { path: "shapefiles/railways/Bayfield_railways.zip", name: "Bayfield" },
    { path: "shapefiles/railways/Brown_railways.zip", name: "Brown" },
    { path: "shapefiles/railways/Buffalo_railways.zip", name: "Buffalo" },
    { path: "shapefiles/railways/Calumet_railways.zip", name: "Calumet" },
    { path: "shapefiles/railways/Chippewa_railways.zip", name: "Chippewa" },
    { path: "shapefiles/railways/Clark_railways.zip", name: "Clark" },
    { path: "shapefiles/railways/Columbia_railways.zip", name: "Columbia" },
    { path: "shapefiles/railways/Crawford_railways.zip", name: "Crawford" },
    { path: "shapefiles/railways/Dane_railways.zip", name: "Dane" },
    { path: "shapefiles/railways/Dodge_railways.zip", name: "Dodge" },
    { path: "shapefiles/railways/Douglas_railways.zip", name: "Douglas" },
    { path: "shapefiles/railways/Dunn_railways.zip", name: "Dunn" },
    { path: "shapefiles/railways/Eau Claire_railways.zip", name: "Eau Claire" },
    { path: "shapefiles/railways/Fond du Lac_railways.zip", name: "Fond du Lac" },
    { path: "shapefiles/railways/Forest_railways.zip", name: "Forest" },
    { path: "shapefiles/railways/Grant_railways.zip", name: "Grant" },
    { path: "shapefiles/railways/Green_railways.zip", name: "Green" },
    { path: "shapefiles/railways/Green Lake_railways.zip", name: "Green Lake" },
    { path: "shapefiles/railways/Iowa_railways.zip", name: "Iowa" },
    { path: "shapefiles/railways/Iron_railways.zip", name: "Iron" },
    { path: "shapefiles/railways/Jackson_railways.zip", name: "Jackson" },
    { path: "shapefiles/railways/Jefferson_railways.zip", name: "Jefferson" },
    { path: "shapefiles/railways/Juneau_railways.zip", name: "Juneau" },
    { path: "shapefiles/railways/Kenosha_railways.zip", name: "Kenosha" },
    { path: "shapefiles/railways/Kewaunee_railways.zip", name: "Kewaunee" },
    { path: "shapefiles/railways/La Crosse_railways.zip", name: "La Crosse" },
    { path: "shapefiles/railways/Lincoln_railways.zip", name: "Lincoln" },
    { path: "shapefiles/railways/Manitowoc_railways.zip", name: "Manitowoc" },
    { path: "shapefiles/railways/Marathon_railways.zip", name: "Marathon" },
    { path: "shapefiles/railways/Marinette_railways.zip", name: "Marinette" },
    { path: "shapefiles/railways/Marquette_railways.zip", name: "Marquette" },
    { path: "shapefiles/railways/Milwaukee_railways.zip", name: "Milwaukee" },
    { path: "shapefiles/railways/Monroe_railways.zip", name: "Monroe" },
    { path: "shapefiles/railways/Oconto_railways.zip", name: "Oconto" },
    { path: "shapefiles/railways/Oneida_railways.zip", name: "Oneida" },
    { path: "shapefiles/railways/Outagamie_railways.zip", name: "Outagamie" },
    { path: "shapefiles/railways/Ozaukee_railways.zip", name: "Ozaukee" },
    { path: "shapefiles/railways/Pepin_railways.zip", name: "Pepin" },
    { path: "shapefiles/railways/Pierce_railways.zip", name: "Pierce" },
    { path: "shapefiles/railways/Polk_railways.zip", name: "Polk" },
    { path: "shapefiles/railways/Portage_railways.zip", name: "Portage" },
    { path: "shapefiles/railways/Price_railways.zip", name: "Price" },
    { path: "shapefiles/railways/Racine_railways.zip", name: "Racine" },
    { path: "shapefiles/railways/Richland_railways.zip", name: "Richland" },
    { path: "shapefiles/railways/Rock_railways.zip", name: "Rock" },
    { path: "shapefiles/railways/Rusk_railways.zip", name: "Rusk" },
    { path: "shapefiles/railways/Sauk_railways.zip", name: "Sauk" },
    { path: "shapefiles/railways/Sawyer_railways.zip", name: "Sawyer" },
    { path: "shapefiles/railways/Shawano_railways.zip", name: "Shawano" },
    { path: "shapefiles/railways/Sheboygan_railways.zip", name: "Sheboygan" },
    { path: "shapefiles/railways/St. Croix_railways.zip", name: "St. Croix" },
    { path: "shapefiles/railways/Taylor_railways.zip", name: "Taylor" },
    { path: "shapefiles/railways/Trempealeau_railways.zip", name: "Trempealeau" },
    { path: "shapefiles/railways/Vernon_railways.zip", name: "Vernon" },
    { path: "shapefiles/railways/Walworth_railways.zip", name: "Walworth" },
    { path: "shapefiles/railways/Washburn_railways.zip", name: "Washburn" },
    { path: "shapefiles/railways/Washington_railways.zip", name: "Washington" },
    { path: "shapefiles/railways/Waukesha_railways.zip", name: "Waukesha" },
    { path: "shapefiles/railways/Waupaca_railways.zip", name: "Waupaca" },
    { path: "shapefiles/railways/Winnebago_railways.zip", name: "Winnebago" },
    { path: "shapefiles/railways/Wood_railways.zip", name: "Wood" }
];

// Define the style for the railways
var railwayStyle = {
    color: "blue", // Line color
    weight: 5,    // Line thickness
    opacity: 0.7  // Line opacity
};

// Create a feature group to combine all railways
var railways = L.featureGroup().addTo(mymap);

// Function to load and style each shapefile
shapefilePaths.forEach(function(shapefile) {
    var layer = new L.Shapefile(shapefile.path);
    layer.once('data:loaded', function() {
        layer.setStyle(railwayStyle);
        railways.addLayer(layer);
    });
});

/*********** Highways Layer **********/
var pahigh = new L.Shapefile("shapefiles/highways.zip");

var highwayStyle = {
    color: "orange", // color of line
    weight: 5, // weight or thickness of the line
    opacity: 0.7 // opacity of line (0 for full transparency, 1 for full opacity)
};

// Create a feature group to combine both shapefiles
var highways = L.featureGroup();

// Set style and add Pennsylvania railways shapefile to the feature group
pahigh.once('data:loaded', function() {
    pahigh.setStyle(highwayStyle);
    highways.addLayer(pahigh);
});


// for big regions such as california, use code below



/************** Municipality Outlines *************/
var municipalities = new L.Shapefile('shapefiles/muncipalities.zip', {
    style: function(feature) {
        return {
            fillColor: 'transparent', 
            color: '#000000',           
            weight: 3                
        };
    }
});

//add popups
var labeledMuni =municipalities.bindPopup(function(layer){
		var listed =  "<dd>"+layer.feature.properties.MUNCIPA+"</dd>"
		return listed
})

/************** County Outlines *************/
// Load county outline shapefile
var counties = new L.Shapefile('shapefiles/county_outline.zip');

//add popups
var labeledCount =counties.bindPopup(function(layer){
		var listed =  "<dd>"+layer.feature.properties.NAME + " County" +"</dd>"
		return listed
})

/*********** County 1km Grids ************/
// Load county 1km grid shapefiles
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
"<strong>Establishment</strong>" : establishment,
"<strong>Transport</strong>" : hubs,
"<strong>Vineyards</strong>" : vineyard,    
"<strong>Survey Efforts (2022-2023)</strong>" : surveyTOTAL,
"<strong>SLF Found</strong>" :  densityTOTAL,
"<strong>Railways</strong>" : railways,
"<strong>Highways</strong>" : highways,
"<strong>County Lines</strong>": labeledCount,
"<strong>Municipality Lines</strong>": labeledMuni,
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

