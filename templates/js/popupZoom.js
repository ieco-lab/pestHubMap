function adjustPopupSize(map) {
    // Hide popups when zoom changes
    map.on('zoomend', function () {
        map.closePopup(); // Close any open popups
    });

    // When popup is manually opened, style it based on current zoom level
    map.on('popupopen', function (e) {
        let popup = e.popup;
        let popupElement = popup._contentNode;
        if (!popupElement) return;

        let zoomLevel = map.getZoom();
        let fontSize, width;

        if (zoomLevel >= 15) {
            fontSize = '30px';
            width = '500px';
        } else if (zoomLevel >= 13) {
            fontSize = '20px';
            width = '350px';
        } else {
            fontSize = '15px';
            width = '320px';
        }

        popupElement.style.fontSize = fontSize;
        popupElement.parentElement.style.width = width;

        // Optional: tweak popup position if needed
        popup.options.offset = L.point([15, 10]);
        popup.update();
    });
}
