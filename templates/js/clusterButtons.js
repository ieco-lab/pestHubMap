function changeButton(idElement, classElement) {
    var buttonHtml = document.getElementById(idElement);

    if (buttonHtml.className === "greenButton") {
        cluster.removeLayer(layerClusterDict[idElement]);
        return buttonHtml.className = "greenButton redButton";
    } else {
        cluster.addLayer(layerClusterDict[idElement]);
        buttonHtml.className = "greenButton";
    }
}

function toggleAllOff() {
    // Iterate through all buttons
    Object.keys(layerClusterDict).forEach(function (buttonId) {
        // Remove layer and set button color to red
        cluster.removeLayer(layerClusterDict[buttonId]);
        updateButtonColor(buttonId);
    });
}

function toggleAllOn() {
    // Iterate through all buttons
    Object.keys(layerClusterDict).forEach(function (buttonId) {
        // Set button color to green
        buttonHtml = document.getElementById(buttonId);
        buttonHtml.className = "greenButton";
    });

    // Add all layers to the map
    Object.values(layerClusterDict).forEach(function (layer) {
        cluster.addLayer(layer);
    });
}

// Function to update button color based on layer visibility
function updateButtonColor(buttonId) {
    var buttonHtml = document.getElementById(buttonId);
    var layer = layerClusterDict[buttonId];

    // Update the button color based on the current state of the layer
    if (cluster.hasLayer(layer)) {
        buttonHtml.className = "greenButton";
    } else {
        buttonHtml.className = "greenButton redButton";
    }
}