<!-- THIS PAGE IS PRIVATE AND SHOULD NOT BE ACCESSIBLE TO ANYONE OUTSIDE OF iECOLAB -->

<!-- This page contains sensitive data (webserver login) and must be made private on the web servername
  -- It is to be called by the main page through the 'require()' php function -->


<?php

/************ CONNECT TO SERVER ************/
	$servername = "localhost";
	$username = "igsmith";
	$password = "SMzIkd8cTus@I3V7";
	$dbname = "oh_locations"; 
	

	


	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	// Check connection
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}

	else{
		echo "Connected successfully<br><br>";
	} 
/*************************************************************/	
 function sqlPull($connection, $tableName, $layerName, $iconName){
	$sql = "SELECT * FROM $tableName";
	$result = mysqli_query($connection, $sql);
	if (mysqli_num_rows($result) > 0) {
		// output data of each row
		echo "<script>var $layerName = L.layerGroup();"; //create cluster layer
		while($row = mysqli_fetch_assoc($result)) {
			$popup = '"<dd>'.strval($row['Name']). '</dd>'
					.'<dd>'.strval($row['Address']).'</dd>'
					.'<a href= \''.strval('https://google.com/maps/place/').strval($row['Address']).'\' target='.'blank'.'>View Google Maps </a>"';
			
			
			echo " $layerName.addLayer(L.marker([".$row['Latitude'].",".$row['Longitude']."], {icon: $iconName})
			.bindPopup(".$popup.",{closeButton:true}));";
		}
		echo "</script>"; //add cluster layer to map!
	} else {
    echo "0 results $tableName";
	}
}

sqlPull($conn, "amusementparks", "amusementParkLayer", "amusementPark");

sqlPull($conn, "auctioncenter", "auctionCenterLayer", "auction");

sqlPull($conn, "boatlaunches", "boatLayer", "marina"); 

sqlPull($conn, "campground", "campgroundLayer", "tent");

sqlPull($conn, "casino", "casinoLayer", "casinoIcon");	

sqlPull($conn, "college", "collegeLayer", "cap");

sqlPull($conn, "dod", "dodLayer", "armory");

sqlPull($conn, "fairgrounds", "fairgroundLayer", "ride");

sqlPull($conn, "farmersmarket", "farmerMarketLayer", "farmerMarket");

sqlPull($conn, "fleamarket", "fleaMarketLayer", "market");

sqlPull($conn, "landscape", "landscapingLayer", "grass");

sqlPull($conn, "marinas", "marinaLayer", "marina");

sqlPull($conn, "racetracks", "racetrackLayer", "raceFlag");

sqlPull($conn, "railroads", "railroadLayer", "train");

sqlPull($conn, "shippingdistribution", "distributionLayer", "distribution");

sqlPull($conn, "stadiums", "stadiumLayer", "helmetIcon");

sqlPull($conn, "summercamp", "summerCampLayer", "sunIcon");

sqlPull($conn, "timber", "timberLayer", "lumber");

sqlPull($conn, "truckrentals", "truckrentalLayer", "delivTruck");

sqlPull($conn, "truckstops", "truckstopLayer", "truck");	

sqlPull($conn, "winery", "wineryLayer", "winery");

mysqli_close($conn); 




/********** ADD LAYERS TO MAP ***********/
	echo '<script> 
		var cluster = L.markerClusterGroup();
	//	var cluster = L.marker();
		
		cluster.addLayers([
		amusementParkLayer,
	    auctionCenterLayer,
		boatLayer,
		campgroundLayer,
		casinoLayer,
		collegeLayer,
		dodLayer,
		fairgroundLayer,
		farmerMarketLayer,
		fleaMarketLayer,
		landscapingLayer,
		marinaLayer,
		racetrackLayer,
		railroadLayer,
		distributionLayer,
		stadiumLayer,
		summerCampLayer,
		timberLayer,
		truckrentalLayer,
		truckstopLayer,
		wineryLayer
			]);
			
			
 
	mymap.addLayer(cluster);  
	
	</script>  
	
	
	<!------------------ ADD/REMOVE LAYER FUNCTION  ----------------------->
	
	<script>
	//dictionary that links button id <Strings> to cluster layer js variables <JSON>
	var layerClusterDict ={
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
		"amusementparks" : amusementParkLayer
	}; 
	</script>' 
	 


	
?>