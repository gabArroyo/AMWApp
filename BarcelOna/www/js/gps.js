var solicitud = localStorage.getItem("site");
//Iniciar mapa
var map;
var infowindow;
var Latitude = undefined;
var Longitude = undefined;
var image;

 function initMap() {
  var latitud = 41.40436828640126;
  var longitud = 2.1810007095336914;
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: latitud, lng: longitud},  
    zoom: 14
  });
  infoWindow = new google.maps.InfoWindow({map: map});
  getPosition();
}

//Tomar posicion actual del usuario

function getPosition() {
   var Latitud = 41.40436828640126;
   var Longitud = 2.1810007095336914;
   var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
   }
   
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

   function onSuccess(position) {
      Latitud = position.coords.latitude;
      Longitud = position.coords.longitude;
      getMap(Latitud, Longitud);

   };

   function getMap(latitud,longitud){
     var mapOptions = {
       center: new google.maps.LatLng (41.40436828640126, 2.1810007095336914),
       zoom: 12
     };

     map = new google.maps.Map (document.getElementById("map"), mapOptions);
     infowindow = new google.maps.places.PlacesService(map);

     var pyrmont = new google.maps.LatLng(latitud,longitud);

     var marker = new google.maps.Marker({
       position: pyrmont
     });
     
     marker.setMap(map);
     map.setZoom (15);
     map.setCenter(marker.getPosition());

     var service = new google.maps.places.PlacesService(map);
     service.nearbySearch({
     location: pyrmont,
     radius: 500, 
     types: [solicitud]
     }, callback);


   }

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
    }

    function createMarker(place) {
      var placeLoc = place.geometry.location;
        switch (solicitud){
            case 'police':
                image = 'img/pins/police-icon.png';
                break;
            case 'library':
                image = 'img/pins/library-icon.png';
                break;
            case 'hospital':
                image = 'img/pins/hospital-icon.png';
                break;
      }
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        icon: image
      });
      infowindow = new google.maps.InfoWindow();

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });
    }

  
  var onSuccess = function (position){
    var updatedLatitud = position.coords.latitude;
    var updatedLongitud = position.coords.longitude;
    
    if (updatedLatitud != Latitud && updatedLongitud != Longitud){
      Latitud = updatedLatitud;
      Longitud = updatedLongitud;
      getMap(updatedLatitud, updatedLongitud);
    }
  } 

   function onError(error) {
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }
}
