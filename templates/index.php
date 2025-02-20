<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />

	<!-- Tab name and icon -->
	<title>pestHubMap Template</title> 	<!-- Title for Website tab -->
	<link rel="icon" href="images/logo.png"> <!-- Icon for Website tab -->
	
<!------********** A. LOADING FOLDERS AND FILES *********----------->
	<!---------- leaflet folder ------------------>
	<link rel="stylesheet" href="leaflet/leaflet.css"/> 
	<script src="leaflet/leaflet.js"></script>
	<script src ="leaflet/leafletShapefile/shp.js"></script>
	<script src ="leaflet/leafletShapefile/leaflet-shpfile.js"></script>
	<script src ="leaflet/leafletShapefile/shp.js"></script>
	<script src ="leaflet/leafletShapefile/leaflet.ajax.min.js"></script>
	
<script src="https://unpkg.com/leaflet.featuregroup.subgroup@1.0.2/dist/leaflet.featuregroup.subgroup.js"></script>
	
	<!---------- spatial data & icons --------------->
	<script src ="iconPack/iconTest.js"></script> <!-- icons to represent different hubs -->
	<link rel="stylesheet"  type="text/css" href="CSS/map_style.css"> <!-- file to adjust appearance of map -->
	<script src ="jquery/jquery.js"></script>
	<script src ="js/clusterButtons.js"></script> <!-- adds buttons to toggle on and off different hubs  -->
	<script src="js/popupZoom.js"></script> <!-- adjusts popup size -->

	<!----------- leafletMarkerCluster folder -------------->
		<link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.4.0/dist/MarkerCluster.css">
	<link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.4.0/dist/MarkerCluster.Default.css"> 
	<script src ="LeafletMarkerCluster/dist/leaflet.markercluster.js"></script>

	<!----------- leafletGeotiff folder ----------------->
    		<script src="https://unpkg.com/plotty@0.2.0/src/plotty.js"></script>

	<script src="LeafletGeotiff/leaflet-geotiff.js"></script>
	<script src="LeafletGeotiff/leaflet-geotiff-plotty.js"></script>
    	<script src="LeafletGeotiff/leaflet-geotiff-vector.js"></script>
	
	<style>
		*{padding:0px; margin: 0px; border:none; outline:none;}
		html,body{width:100%; height:100%;}	
	</style>

</head>

<!--- ********* B. CREATE MAP & BASIC SETTINGS ********* ----->
	<div id="mapid"  style="height: 90%; width:100%"></div>	
	<script> var mymap = L.map('mapid',{minZoom: 0, maxZoom: 18}).setView([40.9, -77.5], 8); </script> <!-- use to adjust the zoom levels of the map -->
    <script src ="js/baseMap.js"></script> <!-- adds street map -->
	<script src ="js/shapefileVars.js"></script> <!-- adds county shapefiles -->
	
<!----- *********** C. SQLACCESS FILE  ************ --------->
	<?php require("sqlAccess.php")?> <!-- connects to database -->
  
	</script>
<!---- ************ D. ADD/REMOVE LAYER FUNCTION ********** ------>
	<script>
	//dictionary that links button id <Strings> to cluster layer js variables <JSON>
	var layerClusterDict ={
		//"tablename"  :  nameOfLayer
		"hospitals" : hospitalsLayer,
		"policestations": policeStationsLayer,
		"universities" : universitiesLayer
	};
	
	</script>

<!------------------  E. POPUP CONTROL  ----------------------->
<script>
	adjustPopupSize(mymap); //for popups to get bigger when zoomed in, smaller when zoomed out
</script>

</head>

<!----- ********** F. BUTTONS ************** ------->
<!-- button type="button" id= "tablename" class = "greenButton" onclick="changeButton(this.id,this.class)">Name of Category</button> -->
<button type="button" id="hospitals" class="greenButton" onclick="changeButton(this.id,this.class)">Hospitals</button>
<button type="button" id="policestations" class="greenButton" onclick="changeButton(this.id,this.class)">Police Stations</button>
<button type="button" id="universities" class="greenButton" onclick="changeButton(this.id,this.class)">Universities</button>
<button type="button" id="toggleAllOn" class="blueButton" onclick="toggleAllOn()">Toggle All On</button>
<button type="button" id="toggleAllOff" class="blueButton" onclick="toggleAllOff()">Toggle All Off</button>

		

</html>
