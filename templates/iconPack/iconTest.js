var sunIcon = new L.Icon({
	iconUrl: 'iconPack/sun.png',
	//shadowUrl: 'iconPack/marker-shadow.png',
	iconSize: [41, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	//shadowSize: [41, 41]
	}),
	
	casinoIcon = new L.Icon({
		iconUrl: 'iconPack/dice.png',
		//shadowUrl:'iconPack/marker-shadow.png',
		iconSize: [31, 31],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		//shadowSize: [41, 41]
	}),
	soccerIcon = new L.Icon({
		iconUrl: 'iconPack/soccerball.png',
		//shadowUrl: 'iconPack/marker-shadow.png',
		iconSize: [31, 31],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
		//shadowSize: [41, 41]
	}),
	helmetIcon = new L.Icon({
		iconUrl: 'iconPack/helmet.png',
		//shadowUrl: 'iconPack/marker-shadow.png',
		iconSize: [31, 31],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
		//shadowSize: [41, 41]
	}),
	amusementPark = new L.Icon({
		iconUrl: 'iconPack/rollerCoaster.png',
		//shadowUrl: 'iconPack/marker-shadow.png',
		iconSize: [31, 31],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
		//shadowSize: [41, 41]
	}),
	amazon = new L.Icon({
		iconUrl: 'iconPack/amazon.png',
		//shadowUrl: 'iconPack/marker-shadow.png',
		iconSize: [31, 31],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
		//shadowSize: [41, 41]
	}),
	soda = new L.Icon({
		iconUrl: 'iconPack/soda.png',
		//shadowUrl: 'iconPack/marker-shadow.png',
		iconSize: [31, 31],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
		//shadowSize: [41, 41]
	}),
	tent = new L.Icon({
		iconUrl: 'iconPack/tent.png',
		//shadowUrl:'iconPack/marker-shadow.png',
		iconSize: [31, 31],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
		//shadowSize: [41, 41]
	}),
	cap = new L.Icon({
		iconUrl: 'iconPack/cap.png',
		//shadowUrl: 'iconPack/marker-shadow.png',
		iconSize: [31, 31],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
		//shadowSize: [41, 41]
	}),
	ride = new L.Icon({
		iconUrl: 'iconPack/ride.png',
		//shadowUrl: 'iconPack/marker-shadow.png',
		iconSize: [41, 31],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
		//shadowSize: [41, 41]
	}),
	market = new L.Icon({
		iconUrl: 'iconPack/market.png',
		//shadowUrl:'iconPack/marker-shadow.png',
		iconSize: [41, 41],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
		//shadowSize: [41, 41]
	}),
	grass = new L.Icon({
		iconUrl: 'iconPack/grass.png',
		//shadowUrl: 'iconPack/marker-shadow.png',
		iconSize: [41, 41],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
		//shadowSize: [41, 41]
	}),
	raceFlag = new L.Icon({
		iconUrl: 'iconPack/raceFlag.png',
		//shadowUrl: 'iconPack/marker-shadow.png',
		iconSize: [41, 41],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
		//shadowSize: [41, 41]
	}), 
	truck = new L.Icon({
		iconUrl: 'iconPack/truck.png',
		//shadowUrl: 'iconPack/marker-shadow.png',
		iconSize: [41, 41],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
		//shadowSize: [41, 41]
	}),
	pack= new L.Icon({
		iconUrl: 'iconPack/package.png',
		//shadowUrl: 'iconPack/marker-shadow.png',
		iconSize: [41, 41],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
		//shadowSize: [41, 41]
	}),
	delivTruck= new L.Icon({
		iconUrl: 'iconPack/delivTruck.png',
		//shadowUrl: 'iconPack/marker-shadow.png',
		iconSize: [41, 41],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
		//shadowSize: [41, 41]
	}),
	intermodal= new L.Icon({
		iconUrl: 'iconPack/intermodal.png',
		//shadowUrl: 'iconPack/marker-shadow.png',
		iconSize: [41, 41],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
		//shadowSize: [41, 41]
	}),
	garage= new L.Icon({
		iconUrl: 'iconPack/garage.png',
		//shadowUrl: 'iconPack/marker-shadow.png',
		iconSize: [41, 41],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
		//shadowSize: [41, 41]
	}),
	marina= new L.Icon({
		iconUrl: 'iconPack/boat.png',
		//shadowUrl: 'iconPack/boat.png',
		iconSize: [41, 41],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
		//shadowSize: [41, 41]
	}),
	lumber= new L.Icon({
		iconUrl: 'iconPack/wood.png',
		//shadowUrl: 'iconPack/wood.png',
		iconSize: [41, 41],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
		//shadowSize: [41, 41]
	}),
	saw= new L.Icon({
		iconUrl: 'iconPack/blade.png',
		//shadowUrl: 'iconPack/blade.png',
		iconSize: [41, 41],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
		//shadowSize: [41, 41]
	}),
	auction= new L.Icon({
		iconUrl: 'iconPack/auction.png',
		iconSize: [41, 41],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
	}),
	distribution= new L.Icon({
		iconUrl: 'iconPack/distribution.png',
		iconSize: [41, 41],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
	}),
	autoRepair= new L.Icon({
		iconUrl: 'iconPack/autoRepair.png',
		iconSize: [41, 41],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
	}),
	farmerMarket= new L.Icon({
		iconUrl: 'iconPack/farmerMarket.png',
		iconSize: [41, 41],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
	}),
	grapes= new L.Icon({
		iconUrl: 'iconPack/grapes.png',
		iconSize: [41, 41],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
	}),
	armory = new L.Icon({
		iconUrl: 'iconPack/dogtag.png',
		iconSize: [41, 41],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34],
	}),
	train = new L.Icon({
		iconUrl: 'iconPack/train_4.png',
		iconSize: [41, 41],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34]
	}),
	boat = new L.Icon({
		iconUrl: 'iconPack/boat.png',
		iconSize: [41, 41],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34]
	}),
	dod = new L.Icon({
		iconUrl: 'iconPack/dod_logo.png',
		iconSize: [41, 41],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34]
	}),
	shipping = new L.Icon({
		iconUrl: 'iconPack/shipping_container.png',
		iconSize: [41, 41],
		iconAnchor: [5, 41],
		popupAnchor: [1, -34]
	})



/*
var iconList = [casinoIcon, helmetIcon, sunIcon,amusementPark,amazon,soda,tent,ride,cap,market,raceFlag,truck,
				grass,pack,delivTruck,intermodal,garage];
*/