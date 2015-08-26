var markers = [
    ['60 Norte', 20.999045520640728, -89.62207674980164],
    ['Abastos', 20.990927, -89.665944],
    ['Alemán', 20.991753, -89.60453],
    ['Pacabtún', 20.974208, -89.585567],
    ['42 Sur', 20.9277, -89.607802],
    ['Centro', 20.963501, -89.624255],
    ['Santa Ana', 20.975881, -89.621583],
    ['Xoclán', 20.961575, -89.663104]
];

function initialize() {
    var latlng = new google.maps.LatLng(20.97715, -89.61857);
    var myOptions = {
        zoom: 12,
        center: latlng,
        mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
          },
          zoomControl: true,
          streetViewControl: false,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
          },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true
    };
    var map = new google.maps.Map(document.getElementById("map_canvas_sucursales"),myOptions);
    var infowindow = new google.maps.InfoWindow(), marker, i;
    for (i = 0; i < markers.length; i++) {  
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(markers[i][1], markers[i][2]),
            icon: 'http://hint.mx/demo/multiempac/images/Pin_2.png',
            map: map
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(markers[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
    
    
    var styles = [
		{ "featureType": "landscape.natural.landcover", "stylers": [ { "hue": "#00aaff" } ] },{ "featureType": "road.arterial", "stylers": [ { "saturation": 1 }, { "hue": "#00aaff" }, { "color": "#808080" }, { "lightness": 80 } ] },{ "featureType": "landscape.man_made", "stylers": [ { "lightness": 50 }, { "hue": "#00ffff" } ] },{ "featureType": "road.highway", "stylers": [ { "lightness": 30 }, { "hue": "#2EBED9" } ] }
];

	map.setOptions({styles: styles})
	
	google.maps.event.addListener(companyMarker, 'click', function() {
					infowindow.open(map,companyMarker);
				});
}