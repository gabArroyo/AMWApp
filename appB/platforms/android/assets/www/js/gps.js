
//document.getElementById("watchPosition").addEventListener("click", watchPosition);
/*document.getElementById("getPosition").addEventListener("click", getPosition);
document.getElementById("watchPosition").addEventListener("click", watchPosition);	
document.getElementById("initMap").addEventListener("click", initMap);*/  

function getPosition() {

   alert('oeee');
   var Latitud = 41.40436828640126;
   var Longitud = 2.1810007095336914;
   var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000
   }
   
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
   alert('Latitude: '          + Latitud         + '\n' +
         'Longitude: '         + Longitud      + '\n');
   function onSuccess(position) {
      Latitud = position.coords.latitude;
      Longitud = position.coords.longitude;
      getMap(Latitud, Longitud);

      alert('Latitude: '          + position.coords.latitude          + '\n' +
         'Longitude: '         + position.coords.longitude         + '\n' +
         'Altitude: '          + position.coords.altitude          + '\n' +
         'Accuracy: '          + position.coords.accuracy          + '\n' +
         'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
         'Heading: '           + position.coords.heading           + '\n' +
         'Speed: '             + position.coords.speed             + '\n' +
         'Timestamp: '         + position.timestamp                + '\n');
   };

   function getMap(latitud,longitud){
    var mapOptions = {
      center: new google.maps.LatLng (41.40436828640126, 2.1810007095336914),
      zoom: 12
    };

    var map = new google.maps.Map (document.getElementById("map"), mapOptions);

    var latLong = new google.maps.LatLng(latitud,longitud);
    var marker = new google.maps.Marker({
      position: latLong
    });

    marker.setMap(map);
    map.setZoom (15);
    map.setCenter(marker.getPosition());
   }

   var onMapWatchSuccess = function (position){
    var updatedLatitud = position.coords.latitude;
    var updatedLongitud = position.coords.longitude;

    if (updatedLatitud != Latitud && updatedLongitud != Longitud){
      Latitud = updatedLatitud;
      Longitud = updatedLongitud;

      getMap(updatedLatitud, updatedLongitud);
      alert("new position");
    }
   } 

   function onError(error) {
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }
}


function watchPosition() {
  alert('oeee wath');
   var options = {
      maximumAge: 3600000,
      timeout: 6000,
      enableHighAccuracy: true,
   }

   var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);

   function onSuccess(position) {
       alert('llleee wath');

      alert('Latitude: '          + position.coords.latitude          + '\n' +
         'Longitude: '         + position.coords.longitude         + '\n' +
         'Altitude: '          + position.coords.altitude          + '\n' +
         'Accuracy: '          + position.coords.accuracy          + '\n' +
         'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
         'Heading: '           + position.coords.heading           + '\n' +
         'Speed: '             + position.coords.speed             + '\n' +
         'Timestamp: '         + position.timestamp                + '\n');
   };

   function onError(error) {
      alert('code: '    + error.code    + '\n' +'message: ' + error.message + '\n');
   }
}



////////////////////////////////////////****************************************************
 function initMap() {
  var latitud = 41.40436828640126;
  var longitud = 2.1810007095336914;
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: latitud, lng: longitud},  
    zoom: 14
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  alert('Latitude: '          + latitud         + '\n' +
         'Longitude: '         + longitud      + '\n');

}
