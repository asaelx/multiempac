var markers = [
    ['<span style="font-size:13px;"><b>60 Norte</b><br>Calle 60 No.261 Bodega 3<br>Enlace Circuito Colonias</span>', 20.999045520640728, -89.62207674980164],
    ['<span style="font-size:13px;"><b>Abastos</b><br>Calle 130 #358 x 128 y 130<br>Col. Yucalpeten</span>', 20.990927, -89.665944],
    ['<span style="font-size:13px;"><b>Alemán</b><br>Calle 17-B #86 x Esq. Av. Alemán<br>Col. Itzimná.</span>', 20.991753, -89.60453],
    ['<span style="font-size:13px;"><b>Pacabtún</b><br>Calle 49 #313 Local 2 y 3<br>Col. Manuel Ávila Camacho</span>', 20.974208, -89.585567],
    ['<span style="font-size:13px;"><b>42 Sur</b><br>Calle 131 #196 depto. 2 X 42 y S/N<br>Col. San Nicolás del Sur</span>', 20.9277, -89.607802],
    ['<span style="font-size:13px;"><b>Centro</b><br>Calle 67 x 60 y 62<br>Col. Centro</span>', 20.963501, -89.624255],
    ['<span style="font-size:13px;"><b>Santa Ana</b><br>Calle 60 #421 x 45 y 47 depto. 4<br>Col. Centro</span>', 20.975881, -89.621583],
    ['<span style="font-size:13px;"><b>San Benito</b><br>Calle 54 #524B local 16 por 65 y 67<br>Col. Centro</span>', 20.9635675, -89.6197475],
    ['<span style="font-size:13px;"><b>Xoclán</b><br>Calle 65-A #887 local 1 y 2 por 118 y 120<br>Col. Xoclán Rejas</span>', 20.961575, -89.663104]
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
          scrollwheel: false,
          draggable: false,
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
            icon: 'http://multiempac.com/images/Pin_2.png',
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