function adjustPopupSize(map) {
    // Event listener: When zooming ends, adjust popup sizes
    map.on('zoomend', function () {
        let zoomLevel = map.getZoom(); // Get the current zoom level

        // Iterate through all layers on the map
        map.eachLayer(layer => {
            if (layer.getPopup && layer.getPopup()) { // Check if the layer has a popup
                let popup = layer.getPopup();
                let popupElement = popup._contentNode; // Get the popup's content node

                if (!popupElement) return; // If no content node exists, skip this layer

                let offsetY; // Variable to store popup offset

                // Adjust popup size and offset based on zoom level
                if (zoomLevel >= 15) { // High zoom: Larger popups
                    popupElement.style.fontSize = '30px';
                    popupElement.parentElement.style.width = '500px';
                    offsetY = [15, 10]; // Position popup directly above
                } else if (zoomLevel >= 13) { // Medium zoom : Medium-sized popups
                    popupElement.style.fontSize = '20px';
                    popupElement.parentElement.style.width = '350px';
                    offsetY = [15, 10];
                } else if (zoomLevel >= 11) { // Low zoom: Smaller popups
                    popupElement.style.fontSize = '15px';
                    popupElement.parentElement.style.width = '320px';
                    offsetY = [15, 10];
                } else { // Very low zoom: Hide all popups
                    map.closePopup();
                    return;
                }

                // Update popup offset to keep it positioned correctly
                popup.options.offset = L.point(offsetY);
                popup.update(); // Apply the changes
            }
        });
    });

    // Event listener: When a popup opens, ensure correct offset
    map.on('popupopen', function () {
        map.eachLayer(layer => {
            if (layer.getPopup && layer.getPopup()) { // Check if layer has a popup
                let popup = layer.getPopup();
                let popupElement = popup._contentNode; // Get popup content node

                if (!popupElement) return; // Skip if no content node exists

                let offsetY = [15, 10]; // Default offset to keep popups positioned above

                // Update popup offset
                popup.options.offset = L.point(offsetY);
                popup.update(); // Apply changes
            }
        });
    });
}
