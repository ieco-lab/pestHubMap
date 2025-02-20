
L.DistanceGrid = function (cellSize) {
	this._cellSize = cellSize;
	this._sqCellSize = cellSize * cellSize;
	this._grid = {};
	this._objectPoint = { };
};

L.DistanceGrid.prototype = {

	addObject: function (obj, point) {
		var x = this._getCoord(point.x),
		    y = this._getCoord(point.y),
		    grid = this._grid,
		    row = grid[y] = grid[y] || {},
		    cell = row[x] = row[x] || [],
		    stamp = L.Util.stamp(obj);

		this._objectPoint[stamp] = point;

		cell.push(obj);
	},

	updateObject: function (obj, point) {
		this.removeObject(obj);
		this.addObject(obj, point);
	},

	//Returns true if the object was found
	removeObject: function (obj, point) {
		var x = this._getCoord(point.x),
		    y = this._getCoord(point.y),
		    grid = this._grid,
		    row = grid[y] = grid[y] || {},
		    cell = row[x] = row[x] || [],
		    i, len;

		delete this._objectPoint[L.Util.stamp(obj)];

		for (i = 0, len = cell.length; i < len; i++) {
			if (cell[i] === obj) {

				cell.splice(i, 1);

				if (len === 1) {
					delete row[x];
				}

				return true;
			}
		}

	},

	eachObject: function (fn, context) {
		var i, j, k, len, row, cell, removed,
		    grid = this._grid;

		for (i in grid) {
			row = grid[i];

			for (j in row) {
				cell = row[j];

				for (k = 0, len = cell.length; k < len; k++) {
					removed = fn.call(context, cell[k]);
					if (removed) {
						k--;
						len--;
					}
				}
			}
		}
	},

	getNearObject: function (point) {
		var x = this._getCoord(point.x),
		    y = this._getCoord(point.y),
		    i, j, k, row, cell, len, obj, dist,
		    objectPoint = this._objectPoint,
		    closestDistSq = this._sqCellSize,
		    closest = null;

		for (i = y - 1; i <= y + 1; i++) {
			row = this._grid[i];
			if (row) {

				for (j = x - 1; j <= x + 1; j++) {
					cell = row[j];
					if (cell) {

						for (k = 0, len = cell.length; k < len; k++) {
							obj = cell[k];
							dist = this._sqDist(objectPoint[L.Util.stamp(obj)], point);
							if (dist < closestDistSq ||
								dist <= closestDistSq && closest === null) {
								closestDistSq = dist;
								closest = obj;
							}
						}
					}
				}
			}
		}
		return closest;
	},

	_getCoord: function (x) {
		var coord = Math.floor(x / this._cellSize);
		return isFinite(coord) ? coord : x;
	},

	_sqDist: function (p, p2) {
		var dx = p2.x - p.x,
		    dy = p2.y - p.y;
		return dx * dx + dy * dy;
	}
};

(function fixMarkerCluster( Leaflet ) {
    let ollb = Leaflet.latLngBounds;
    let olb  = Leaflet.bounds;

    // hardcore dirty hack WTF fix for leaflet/markercluster fail in prod builds

    // Marker cluster seems to think Leaflet.latLngBounds clone the bounds if bounds param is a leaflet llbound
    // it does not and return unitialized llbounds in prod build
    Leaflet.latLngBounds                 = function ( bounds ) {
        var r = ollb(...arguments) || ollb();
        if ( (!r._northEast || !r._southWest) ) {
            Object.keys(bounds).map(k => (r[k] = bounds[k]));//should clone
        }
        return r;
    };
    // same for screen bounds
    Leaflet.bounds                       = function ( bounds ) {
        var r = olb(...arguments) || olb();
        if ( (!r.min || !r.max) ) {
            Object.keys(bounds).map(k => (r[k] = bounds[k]));
        }
        return r;
    };
    // Void some marker cluster redraw issues in react .. 
    // let ormi                             = Leaflet.Marker.prototype._removeIcon;
    // Leaflet.Marker.prototype._removeIcon = function () {
    //     return this._icon && ormi.apply(this, arguments);
    // }
})(Leaflet);