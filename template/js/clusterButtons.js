function changeButton(idElement,classElement){
	var index, locatType
	
	
	
	var buttonHtml = document.getElementById(idElement)
	
	
	if(buttonHtml.className=="greenButton"){
		cluster.removeLayer(layerClusterDict[idElement]);
		return buttonHtml.className = "greenButton redButton"
	}
	else{
		cluster.addLayer(layerClusterDict[idElement]);
		buttonHtml.className = "greenButton"
	}
};