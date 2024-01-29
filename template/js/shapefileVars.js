
/************** COUNTY SHAPEFILE *************/
var counties = new L.Shapefile('shapefiles/OH_counties_outline.zip');

//add popups
var labeledCount =counties.bindPopup(function(layer){
		var listed =  "<dd>"+layer.feature.properties.NAME + " County" +"</dd>"
		return listed
})

/************** SLF MAXENT MUNICIPALITITES GEOJSON *************/
var maxent = new L.Shapefile("shapefiles/OH_maxent.zip");

var colorScheme = ['#fff5f0','#fee0d2','#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d','#a50f15','#67000d', '#360007']
function writeStyle(){
	maxent.setStyle(function (feature) { 
       		var val = feature.properties.ensmbl_;
		var shade = colorScheme[0];
        	if(val > 0.1 & val <= 0.2){
            		shade = colorScheme[1];	
        	}else if(val > 0.2 & val <= 0.3){
			shade = colorScheme[2];
             		
        	}else if(val > 0.3 & val <= 0.4){
			shade = colorScheme[3];
             		
        	}else if(val > 0.4 & val <= 0.5){
			shade = colorScheme[4];
             		
        	}else if(val > 0.5 & val <= 0.6){
			shade = colorScheme[5];
             		
        	}else if(val > 0.6 & val <= 0.7){
			shade = colorScheme[6];
             		
        	}else if(val > 0.7 & val <= 0.8){
			shade = colorScheme[7];
             		
        	}else if(val > 0.8 & val <= 0.9){
			shade = colorScheme[8];
             		
        	}else if (val > 0.9){
            		shade = colorScheme[9];
        	}

		return{
                fillColor: shade,
	    	  	fillOpacity: 0.7,
                color: 'white',
		  		weight: 1
             		} 
	})
}
maxent.on('data:loaded', writeStyle).addTo(mymap);
maxent.on('data:loaded', maxent.bindPopup(function(layer){
						var mean = Math.round((layer.feature.properties.ensmbl_) *10);
						var listed =  "<dd>Subdivision: " +layer.feature.properties.NAME+"<br> Risk (0-10): "+ mean +"</dd>"
						return listed
					})
)

// add legend
var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend');
    div.innerText = "Risk";

    for (var i = colorScheme.length-1; i >= 0; i--) {
        div.innerHTML +=
            '<br><i style="background:' + colorScheme[i] + '"></i>';
    }
    div.innerHTML += "</div>";
    return div;
};
legend.addTo(mymap);
/************** SLF MAXENT MUNICIPALITITES SHAPEFILE *************/
/*var maxent = new L.Shapefile('shapefiles/slf_maxent_pa.zip');

var labeledMaxent =maxent.bindPopup(function(layer){
		var listed =  "<dd>Municipality: " +layer.feature.properties.MUNC+"<br> Mean: "+layer.feature.properties.mean +"</dd>"
		return listed
})
labeledMaxent.eachLayer(function (layer) { 
        var val = layer.feature.properties.mean;
        if(val < 0.3){
            layer.setStyle({fillColor :'red'}) 
        }else if(val > 0.3 & val<0.7){
            layer.setStyle({fillColor :'green'}) 
        }else{
            layer.setStyle({fillColor :'blue'}) 
        }
});*/
/*********** 1 KM GRID SHAPEFILES ************/
var countyShapefiles = 
[
Adams = new L.Shapefile('shapefiles/1kmGridByCounty/Adams.zip'),
Allen = new L.Shapefile('shapefiles/1kmGridByCounty/Allen.zip'),
Ashland = new L.Shapefile('shapefiles/1kmGridByCounty/Ashland.zip'),
Ashtabula = new L.Shapefile('shapefiles/1kmGridByCounty/Ashtabula.zip'),
Athens = new L.Shapefile('shapefiles/1kmGridByCounty/Athens.zip'),
Auglaize = new L.Shapefile('shapefiles/1kmGridByCounty/Auglaize.zip'),
Belmont = new L.Shapefile('shapefiles/1kmGridByCounty/Belmont.zip'),
Brown = new L.Shapefile('shapefiles/1kmGridByCounty/Brown.zip'),
Butler = new L.Shapefile('shapefiles/1kmGridByCounty/Butler.zip'),
Carroll = new L.Shapefile('shapefiles/1kmGridByCounty/Carroll.zip'),
Champaign = new L.Shapefile('shapefiles/1kmGridByCounty/Champaign.zip'),
Clark = new L.Shapefile('shapefiles/1kmGridByCounty/Clark.zip'),
Clermont = new L.Shapefile('shapefiles/1kmGridByCounty/Clermont.zip'),
Clinton = new L.Shapefile('shapefiles/1kmGridByCounty/Clinton.zip'),
Columbiana = new L.Shapefile('shapefiles/1kmGridByCounty/Columbiana.zip'),
Coshocton = new L.Shapefile('shapefiles/1kmGridByCounty/Coshocton.zip'),
Crawford = new L.Shapefile('shapefiles/1kmGridByCounty/Crawford.zip'),
Cuyahoga = new L.Shapefile('shapefiles/1kmGridByCounty/Cuyahoga.zip'),
Darke = new L.Shapefile('shapefiles/1kmGridByCounty/Darke.zip'),
Defiance = new L.Shapefile('shapefiles/1kmGridByCounty/Defiance.zip'),
Delaware = new L.Shapefile('shapefiles/1kmGridByCounty/Delaware.zip'),
Erie = new L.Shapefile('shapefiles/1kmGridByCounty/Erie.zip'),
Fairfield = new L.Shapefile('shapefiles/1kmGridByCounty/Fairfield.zip'),
Fayette = new L.Shapefile('shapefiles/1kmGridByCounty/Fayette.zip'),
Franklin = new L.Shapefile('shapefiles/1kmGridByCounty/Franklin.zip'),
Fulton = new L.Shapefile('shapefiles/1kmGridByCounty/Fulton.zip'),
Gallia = new L.Shapefile('shapefiles/1kmGridByCounty/Gallia.zip'),
Geauga = new L.Shapefile('shapefiles/1kmGridByCounty/Geauga.zip'),
Greene = new L.Shapefile('shapefiles/1kmGridByCounty/Greene.zip'),
Guernsey = new L.Shapefile('shapefiles/1kmGridByCounty/Guernsey.zip'),
Hamilton = new L.Shapefile('shapefiles/1kmGridByCounty/Hamilton.zip'),
Hancock = new L.Shapefile('shapefiles/1kmGridByCounty/Hancock.zip'),
Hardin = new L.Shapefile('shapefiles/1kmGridByCounty/Hardin.zip'),
Harrison = new L.Shapefile('shapefiles/1kmGridByCounty/Harrison.zip'),
Henry = new L.Shapefile('shapefiles/1kmGridByCounty/Henry.zip'),
Highland = new L.Shapefile('shapefiles/1kmGridByCounty/Highland.zip'),
Hocking = new L.Shapefile('shapefiles/1kmGridByCounty/Hocking.zip'),
Holmes = new L.Shapefile('shapefiles/1kmGridByCounty/Holmes.zip'),
Huron = new L.Shapefile('shapefiles/1kmGridByCounty/Huron.zip'),
Jackson = new L.Shapefile('shapefiles/1kmGridByCounty/Jackson.zip'),
Jefferson = new L.Shapefile('shapefiles/1kmGridByCounty/Jefferson.zip'),
Knox = new L.Shapefile('shapefiles/1kmGridByCounty/Knox.zip'),
Lake = new L.Shapefile('shapefiles/1kmGridByCounty/Lake.zip'),
Lawrence = new L.Shapefile('shapefiles/1kmGridByCounty/Lawrence.zip'),
Licking = new L.Shapefile('shapefiles/1kmGridByCounty/Licking.zip'),
Logan = new L.Shapefile('shapefiles/1kmGridByCounty/Logan.zip'),
Lorain = new L.Shapefile('shapefiles/1kmGridByCounty/Lorain.zip'),
Lucas = new L.Shapefile('shapefiles/1kmGridByCounty/Lucas.zip'),
Madison = new L.Shapefile('shapefiles/1kmGridByCounty/Madison.zip'),
Mahoning = new L.Shapefile('shapefiles/1kmGridByCounty/Mahoning.zip'),
Marion = new L.Shapefile('shapefiles/1kmGridByCounty/Marion.zip'),
Medina = new L.Shapefile('shapefiles/1kmGridByCounty/Medina.zip'),
Meigs = new L.Shapefile('shapefiles/1kmGridByCounty/Meigs.zip'),
Mercer = new L.Shapefile('shapefiles/1kmGridByCounty/Mercer.zip'),
Miami = new L.Shapefile('shapefiles/1kmGridByCounty/Miami.zip'),
Monroe = new L.Shapefile('shapefiles/1kmGridByCounty/Monroe.zip'),
Montgomery = new L.Shapefile('shapefiles/1kmGridByCounty/Montgomery.zip'),
Morgan = new L.Shapefile('shapefiles/1kmGridByCounty/Morgan.zip'),
Morrow = new L.Shapefile('shapefiles/1kmGridByCounty/Morrow.zip'),
Muskingum = new L.Shapefile('shapefiles/1kmGridByCounty/Muskingum.zip'),
Noble = new L.Shapefile('shapefiles/1kmGridByCounty/Noble.zip'),
Ottawa = new L.Shapefile('shapefiles/1kmGridByCounty/Ottawa.zip'),
Paulding = new L.Shapefile('shapefiles/1kmGridByCounty/Paulding.zip'),
Perry = new L.Shapefile('shapefiles/1kmGridByCounty/Perry.zip'),
Pickaway = new L.Shapefile('shapefiles/1kmGridByCounty/Pickaway.zip'),
Pike = new L.Shapefile('shapefiles/1kmGridByCounty/Pike.zip'),
Portage = new L.Shapefile('shapefiles/1kmGridByCounty/Portage.zip'),
Preble = new L.Shapefile('shapefiles/1kmGridByCounty/Preble.zip'),
Putnam = new L.Shapefile('shapefiles/1kmGridByCounty/Putnam.zip'),
Richland = new L.Shapefile('shapefiles/1kmGridByCounty/Richland.zip'), 
Ross = new L.Shapefile('shapefiles/1kmGridByCounty/Ross.zip'),
Sandusky = new L.Shapefile('shapefiles/1kmGridByCounty/Sandusky.zip'),
Scioto = new L.Shapefile('shapefiles/1kmGridByCounty/Scioto.zip'),
Seneca = new L.Shapefile('shapefiles/1kmGridByCounty/Seneca.zip'), 
Shelby = new L.Shapefile('shapefiles/1kmGridByCounty/Shelby.zip'),
Stark = new L.Shapefile('shapefiles/1kmGridByCounty/Stark.zip'),
Summit = new L.Shapefile('shapefiles/1kmGridByCounty/Summit.zip'),
Trumbull = new L.Shapefile('shapefiles/1kmGridByCounty/Trumbull.zip'),
Tuscarawas = new L.Shapefile('shapefiles/1kmGridByCounty/Tuscarawas.zip'),
Union = new L.Shapefile('shapefiles/1kmGridByCounty/Union.zip'),
VanWert = new L.Shapefile('shapefiles/1kmGridByCounty/Van Wert.zip'),
Vinton = new L.Shapefile('shapefiles/1kmGridByCounty/Vinton.zip'),
Warren = new L.Shapefile('shapefiles/1kmGridByCounty/Warren.zip'),
Washington = new L.Shapefile('shapefiles/1kmGridByCounty/Washington.zip'),
Wayne = new L.Shapefile('shapefiles/1kmGridByCounty/Wayne.zip'),
Williams = new L.Shapefile('shapefiles/1kmGridByCounty/Williams.zip'),
Wood = new L.Shapefile('shapefiles/1kmGridByCounty/Wood.zip'),
Wyandot = new L.Shapefile('shapefiles/1kmGridByCounty/Wyandot.zip')
]

//add popups
var bindedCounties = [];

for(var i=0; i<countyShapefiles.length; i++){
	var county =countyShapefiles[i].bindPopup(function(layer){
		var list =  "<dd>" + layer.feature.properties.NAME + " County" +"</dd>"
				+  "<dd>"+"Cell Name: " + layer.feature.properties.USNG + "</dd>"
		
		return list;
	});
	bindedCounties.push(county);
	}


/********** LAYER GROUP *********/
var countyList ={
	"COUNTIES": labeledCount,
	"RISK" : maxent,
"Adams" : bindedCounties[0],
"Allen" : bindedCounties[1],
"Ashland" : bindedCounties[2],
"Ashtabula" : bindedCounties[3],
"Athens" : bindedCounties[4],
"Auglaize" : bindedCounties[5],
"Belmont" : bindedCounties[6],
"Brown" : bindedCounties[7],
"Butler" : bindedCounties[8],
"Carroll" : bindedCounties[9],
"Champaign" : bindedCounties[10],
"Clark" : bindedCounties[11],
"Clermont" : bindedCounties[12],
"Clinton" : bindedCounties[13],
"Columbiana" : bindedCounties[14],
"Coshocton" : bindedCounties[15],
"Crawford" : bindedCounties[16],
"Cuyahoga" : bindedCounties[17],
"Darke" : bindedCounties[18],
"Defiance" : bindedCounties[19],
"Delaware" : bindedCounties[20],
"Erie" : bindedCounties[21],
"Fairfield" : bindedCounties[22],
"Fayette" : bindedCounties[23],
"Franklin" : bindedCounties[24],
"Fulton" : bindedCounties[25],
"Gallia" : bindedCounties[26],
"Geauga" : bindedCounties[27],
"Greene" : bindedCounties[28],
"Guernsey" : bindedCounties[29],
"Hamilton" : bindedCounties[30],
"Hancock" : bindedCounties[31],
"Hardin" : bindedCounties[32],
"Harrison" : bindedCounties[33],
"Henry" : bindedCounties[34],
"Highland" : bindedCounties[35],
"Hocking" : bindedCounties[36],
"Holmes" : bindedCounties[37],
"Huron" : bindedCounties[38],
"Jackson" : bindedCounties[39],
"Jefferson" : bindedCounties[40],
"Knox" : bindedCounties[41],
"Lake" : bindedCounties[42],
"Lawrence" : bindedCounties[43],
"Licking" : bindedCounties[44],
"Logan" : bindedCounties[45],
"Lorain" : bindedCounties[46],
"Lucas" : bindedCounties[47],
"Madison" : bindedCounties[48],
"Mahoning" : bindedCounties[49],
"Marion" : bindedCounties[50],
"Medina" : bindedCounties[51],
"Meigs" : bindedCounties[52],
"Mercer" : bindedCounties[53],
"Miami" : bindedCounties[54],
"Monroe" : bindedCounties[55],
"Montgomery" : bindedCounties[56],
"Morgan" : bindedCounties[57],
"Morrow" : bindedCounties[58],
"Muskingum" : bindedCounties[59],
"Noble" : bindedCounties[60],
"Ottawa" : bindedCounties[61],
"Paulding" : bindedCounties[62],
"Perry" : bindedCounties[63],
"Pickaway" : bindedCounties[64],
"Pike" : bindedCounties[65],
"Portage" : bindedCounties[66],
"Preble" : bindedCounties[67],
"Putnam" : bindedCounties[68],
"Richland" : bindedCounties[69],
"Ross" : bindedCounties[70],
"Sandusky" : bindedCounties[71],
"Scioto" : bindedCounties[72],
"Seneca" : bindedCounties[73],
"Shelby" : bindedCounties[74],
"Stark" : bindedCounties[75],
"Summit" : bindedCounties[76],
"Trumbull" : bindedCounties[77],
"Tuscarawas" : bindedCounties[78],
"Union" : bindedCounties[79],
"Van Wert" : bindedCounties[80],
"Vinton" : bindedCounties[81],
"Warren" : bindedCounties[82],
"Washington" : bindedCounties[83],
"Wayne" : bindedCounties[84],
"Williams" : bindedCounties[85],
"Wood" : bindedCounties[86],
"Wyandot" : bindedCounties[87]
}



/************** ADD TO LAYER CONTROL ***********/
var emptyBase = {
};

//shapefile layer control (only one at a time to conserve resources)
L.control.layers(emptyBase, countyList).addTo(mymap);
/**********************************************************************************/

