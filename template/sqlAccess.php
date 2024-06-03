<!-- THIS PAGE IS PRIVATE AND SHOULD NOT BE ACCESSIBLE TO ANYONE OUTSIDE OF YOUR ORGANIZATION -->

<!-- This page contains sensitive data (webserver login) and must be made private on the web servername
  -- It is called by index.php through the 'require()' php function -->


<?php

/************ A. Connect to server ************/
	$servername = "localhost";
	$username = "template";
	$password = "PASSWORD"; //password -> found on cpanel SQL management tab
    $dbname = "template"; 
	

	


	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	// Check connection
	if (!$conn) {
		die("Connection failed: " . mysqli_connect_error());
	}

	else{
		echo "Connected successfully<br><br>";
	} 
/************** B. function sqlPull() *************************/	
 function sqlPull($connection, $tableName, $layerName, $iconName){
	$sql = "SELECT * FROM $tableName";
	$result = mysqli_query($connection, $sql);
	if (mysqli_num_rows($result) > 0) {
		// output data of each row
		echo "<script>var $layerName = L.layerGroup();"; //create cluster layer
		while($row = mysqli_fetch_assoc($result)) {
			    $popup = '"<dd>'.strval($row['Name']). '</dd>'
                        .'<a href=\'https://google.com/maps/place/'.strval($row['Address']).'\' target=\'_blank\'><dd>'.strval($row['Address']).'</dd></a><br>'
                        .'<a href=\'https://google.com/maps/place/'.strval($row['Latitude'].",".$row['Longitude']).'\' target=\'_blank\'><dd>'.strval($row['Latitude'].",".$row['Longitude']).'</dd></a>"';
                        
			echo " $layerName.addLayer(L.marker([".$row['Latitude'].",".$row['Longitude']."], {icon: $iconName})
			.bindPopup(".$popup.",{closeButton:true}));";
		}
		echo "</script>"; //add cluster layer to map!
	} else {
    echo "0 results $tableName";
	}
}

sqlPull($conn, "hospitals", "hospitalsLayer", "hospital");

sqlPull($conn, "policestations", "policeStationsLayer", "badge");

sqlPull($conn, "universities", "universitiesLayer", "cap"); 

mysqli_close($conn); 




/********** C. Add layers to map & Add/Remove Layer function ***********/
//Add layers to map
	echo '<script> 
		var cluster = L.markerClusterGroup();
		
		cluster.addLayers([
			hospitalsLayer,
			policeStationsLayer,
			universitiesLayer
			]);
			
			
 
	mymap.addLayer(cluster);  
	
	</script>  
	
	
	<!------------------ Add/remove layer function  ----------------------->
	
	<script>
	//dictionary that links button id <Strings> to cluster layer js variables <JSON>
	var layerClusterDict ={
		"hospitals" : hospitalsLayer,
		"policestations" : policeStationsLayer,
		"universities" : universitiesLayer
	}; 
	</script>' 
	 


	
?>