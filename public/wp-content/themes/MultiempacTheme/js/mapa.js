function initialize() {
	var mapOptions = {
		zoom: 15,
		center: new google.maps.LatLng(20.999045520640728, -89.62207674980164),
		mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
          },
          zoomControl: true,
          scrollwheel: false,
          draggable: false,
          streetViewControl: false,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
          },
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}

	var map = new google.maps.Map(document.getElementById('map_canvas'),
		mapOptions);

	var myLatLng = new google.maps.LatLng(20.999045520640728, -89.62207674980164);
	var beachMarker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: 'http://hint.mx/demo/multiempac/images/Pin_2.png'
	});

	var styles = [
		{ "featureType": "landscape.natural.landcover", "stylers": [ { "hue": "#00aaff" } ] },{ "featureType": "road.arterial", "stylers": [ { "saturation": 1 }, { "hue": "#00aaff" }, { "color": "#808080" }, { "lightness": 80 } ] },{ "featureType": "landscape.man_made", "stylers": [ { "lightness": 50 }, { "hue": "#00ffff" } ] },{ "featureType": "road.highway", "stylers": [ { "lightness": 30 }, { "hue": "#2EBED9" } ] }
];

	map.setOptions({styles: styles})

;}