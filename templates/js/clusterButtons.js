// Function to change the button appearance and toggle layer visibility
function changeButton(idElement, classElement) {
    // Get the button element by its ID
    var buttonHtml = document.getElementById(idElement);

    // Check if the button has the class "greenButton"
    if (buttonHtml.className === "greenButton") {
        // Remove the associated layer from the map
        cluster.removeLayer(layerClusterDict[idElement]);
        // Change the button's class to indicate it's turned off (red)
        return buttonHtml.className = "greenButton redButton";
    } else {
        // Add the associated layer back to the map
        cluster.addLayer(layerClusterDict[idElement]);
        // Reset the button's class to indicate it's turned on (green)
        buttonHtml.className = "greenButton";
    }
}
// Function to turn off all layers and update button colors
function toggleAllOff() {
    // Iterate through all buttons
    Object.keys(layerClusterDict).forEach(function (buttonId) {
        // Remove layer and set button color to red
        cluster.removeLayer(layerClusterDict[buttonId]);
        updateButtonColor(buttonId);
    });
}

// Function to turn on all layers and update button colors
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