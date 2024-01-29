<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		
		
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-100614538-1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'UA-100614538-1');
	</script>
	
	<title>SLF OH pestHubMap- iEcoLab</title>
	<link rel="icon" href="images/web_icon.jpg">
	
	<!-- ********* LEAFLET ********* -->
	<link rel="stylesheet" href="leaflet/leaflet.css"/>
	<script src="leaflet/leaflet.js"></script>
	<script src ="leaflet/leafletShapefile/shp.js"></script>
	<script src ="leaflet/leafletShapefile/leaflet-shpfile.js"></script>
	<script src ="leaflet/leafletShapefile/shp.js"></script>
	<script src ="leaflet/leafletShapefile/leaflet.ajax.min.js"></script>
	
<script src="https://unpkg.com/leaflet.featuregroup.subgroup@1.0.2/dist/leaflet.featuregroup.subgroup.js"></script>
	
	<!-- ********* iEcolab files ********* -->
	<script src ="iconPack/iconTest.js"></script>
	<link rel="stylesheet"  type="text/css" href="CSS/map_style.css"> 
	<script src ="jquery/jquery.js"></script>
	<script src ="js/clusterButtons.js"></script>
		
	
	
	
	<!-- ********* LEAFLET Cluster Map ********* -->
	<link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.4.0/dist/MarkerCluster.css">
	<link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.4.0/dist/MarkerCluster.Default.css"> 
	<script src ="LeafletMarkerCluster/dist/leaflet.markercluster.js"></script>

	<!-- ******* LEAFLET Geotiff *********-->
    	<script src="https://unpkg.com/plotty@0.2.0/src/plotty.js"></script>

	<script src="LeafletGeotiff/leaflet-geotiff.js"></script>
	<script src="LeafletGeotiff/leaflet-geotiff-plotty.js"></script>
    	<script src="LeafletGeotiff/leaflet-geotiff-vector.js"></script>
	
	<style>
		*{padding:0px; margin: 0px; border:none; outline:none;}
		html,body{width:100%; height:100%;}	
	</style>

</head>



<!-------------- <body bgcolor=" #ffffff">
	<div>
		<a href="https://www.iecolab.org/" class="logo">
			<img  border: "5" alt = "iEcoLab" src = "images/iecolab_logo_v2_1_banner_v1_0.png" width= "20%" height = "10%">
			<a class="formText" href = "https://goo.gl/forms/GJRuVXxmuPkWZzII2" target="_blank">Please fill out the form here.</a> <a class="formText">Have you found any errors or would like to leave feedback?</a>
		</a>	
	</div> --------------->
	
	<!--------------  CREATE MAP --------------->
	<div id="mapid"  style="height: 90%; width:100%"></div>	
	<script> var mymap = L.map('mapid',{minZoom: 0, maxZoom: 18}).setView([40.4173, -82.9071], 7); </script>
    <script src ="js/baseMap.js"></script> <!-- adds street map -->
	<script src ="js/shapefileVars.js"></script> <!-- adds county shapefiles -->
	
	<!------------------ PHP: SQL CALL  ----------------------->
	
	<?php require("sqlAccess.php")?>
<!--	<script> var cluster = L.markerClusterGroup();
	//	var cluster = L.marker();
		
		cluster.addLayers([
		//amazonLayer,
		amusementParkLayer,
		armoryLayer,
		autoRepairLayer,
		auctionCenterLayer,
		//boatLayer, 
		bottlingLayer,
		//campgroundLayer,
		casinoLayer,
		collegeLayer,
		distributionCenterLayer,
		//fairgroundLayer,
		farmerMarketLayer,
		fedexLayer,
		fleaMarketLayer,
		//intermodalLayer,
		landscapingLayer,
		lumberLayer,
		marinaLayer,
		movingCompanyLayer,
		oilLayer,
		//racetrackLayer,
		railroadLayer,
		sawmillLayer,
		stadiumLayer,
		//summerCampLayer,
		garageLayer,
		truckstopLayer,
		uspsLayer,
		//wineryLayer 
			]); -->
  
  
	</script>
	<!------------------ ADD/REMOVE LAYER FUNCTION  ----------------------->
	<script>
	
	/* RASTER DATA */
	/*var imageUrl = 'images/slf_maxent_mean_pa_v2.png',
		imageBounds = [[42.26939113911707 , -80.51934457024208], [39.71986707971993, -74.68957358633725]];
    		//imageBounds = [[42.28, -80.52], [39.72, -74.625]];
	var slfDataPaLayer = L.imageOverlay(imageUrl, imageBounds);
	mymap.addLayer(slfDataPaLayer);
	*/
//dictionary that links button id <Strings> to cluster layer js variables <JSON>
	var layerClusterDict ={
		//Button ID  :  Leaflet cluster js variable
	    "landscape": landscapingLayer,
		"fleamarket" : fleaMarketLayer,
		"casino" : casinoLayer,
		"stadiums" :  stadiumLayer,
		"campground" : campgroundLayer,
		"fairgrounds" : fairgroundLayer,
		"college" : collegeLayer,
		"racetracks" : racetrackLayer,
		"truckstops" : truckstopLayer,
		"truckrentals" : truckrentalLayer,
		"timber" : timberLayer, 
		"marinas" : marinaLayer,	
		"summerCamp": summerCampLayer,
		"auctioncenter": auctionCenterLayer,
		"shippingdistribution": distributionLayer,
		"farmersmarket": farmerMarketLayer,
		"winery": wineryLayer,
		"dod": dodLayer,
		"railroads" : railroadLayer,
		"boatlaunches" : boatLayer,
		"amusementparks" : amusementParkLayer,
		"fairgrounds" : fairgroundLayer
	};
	
	
	/* GEOtIFF */
	//var paslf = L.leafletGeotiff("images/slf_maxent_mean_pa.tif").addTo(mymap);


	/*
	L.tileLayer.wms(imageUrl, {
    		//layers: 'nexrad-n0r-900913',
    		format: 'image/png',
    		transparent: false,
    		//attribution: ""
		}).addTo(mymap);
	*/
	</script>
	


<!-------------------------------------- BUTTONS -------------------------->
<!-- <button type="button" id="slfDataPa" class="greenButton" onclick="changeButton(this.id,this.class)">SLF DATA</button> -->

<button type="button" id="amusementparks" class="greenButton" onclick="changeButton(this.id,this.class)">Amusement Parks</button>
<button type="button" id="auctioncenter" class="greenButton" onclick="changeButton(this.id,this.class)">Auctions</button>
<button type="button" id="boatlaunches" class="greenButton" onclick="changeButton(this.id,this.class)">Boat Launches</button>
<button type="button" id="campground" class="greenButton" onclick="changeButton(this.id,this.class)">Campgrounds</button>
<button type="button" id="casino" class="greenButton" onclick="changeButton(this.id,this.class)">Casinos</button>
<button type="button" id="college"class="greenButton" onclick="changeButton(this.id,this.class)">Colleges</button>
<button type="button" id="shippingdistribution" class="greenButton" onclick="changeButton(this.id,this.class)">Distribution Centers</button>
<button type="button" id="fairgrounds" class="greenButton" onclick="changeButton(this.id,this.class)">Fairgrounds</button>
<button type="button" id="farmersmarket" class="greenButton" onclick="changeButton(this.id,this.class)">Farmer's Markets</button>
<button type="button" id="fleamarket" class="greenButton" onclick="changeButton(this.id,this.class)">Flea Markets</button>
<button type="button" id="landscape" class="greenButton" onclick="changeButton(this.id,this.class)">Landscapers</button>
<button type="button" id="marinas" class="greenButton" onclick="changeButton(this.id,this.class)">Marinas</button>
<button type="button" id="dod" class="greenButton" onclick="changeButton(this.id,this.class)">Military Bases</button>
<button type="button" id="racetracks" class="greenButton" onclick="changeButton(this.id,this.class)">Race Tracks</button>
<button type="button" id="railroads" class="greenButton" onclick="changeButton(this.id,this.class)">Railroads</button>
<button type="button" id="stadiums" class="greenButton" onclick="changeButton(this.id,this.class)">Stadiums</button>
<button type="button" id="summerCamp" class="greenButton" onclick="changeButton(this.id,this.class)">Summer Camps</button>
<button type="button" id="timber" class="greenButton" onclick="changeButton(this.id,this.class)">Timber Producers</button>
<button type="button" id="truckrentals" class="greenButton" onclick="changeButton(this.id,this.class)">Truck Rentals</button>
<button type="button" id="truckstops" class="greenButton" onclick="changeButton(this.id,this.class)">Truck Stops</button>
<button type="button" id="winery" class="greenButton" onclick="changeButton(this.id,this.class)">Wineries</button>

</html>
	