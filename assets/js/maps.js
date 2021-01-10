// function initMap() {
//             var map = new google.maps.Map(document.getElementById("map"), {
//                 zoom: 6, 
//                 center: {
//                     lat: 53.2734,
//                     lng: -7.77832031,
//                 }
//             });

//         var labels = "ABCBEFGHIJKLMNOPQRSTUVWXYZ";

//             var locations = [{
//                 lat: 52.9717877,
//                 lng: -9.4291244,
//                 content: '<h1>1</h1>'
//             }, {
//                 lat: 53.34193275,
//                 lng: -6.28672974298643,
//                 content: '<h1>2</h1>'
//             }, {
//                 lat: 55.24082145,
//                 lng: -6.51163864,
//                 content: '<h1>3</h1>'
//             }];

//             // put form action event here depending on checkbox
//             var markers = locations.map(function(location, i) {
//                 return new google.maps.Marker({
//                     position: location,
//                     label: labels[i % labels.length]
//                 });
//             });

//             // make one for each category/color
//             var markerCluster = new MarkerClusterer(map, markers, {
//                 imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
//             });
            
//         }


        // Code from medium website
function initMap() {
   var options = {
      zoom:6,
      center: { lat: 53.2734,
                lng: -7.77832031,} //Coordinates of New York 
   }
var map = new google.maps.Map(document.getElementById('map'), options);

function addMarker(prop) {
   var marker = new google.maps.Marker({
      position: prop.coordinates, // Passing the coordinates
      map:map, //Map that we need to add
      draggarble: false// If set to true you can drag the marker
   });
   if(prop.iconImage) { marker.setIcon(prop.iconImage); }
   if(prop.content) { 
      var information = new google.maps.InfoWindow({
      content: prop.content
      });
      
      marker.addListener('click', function() {
      information.open(map, marker);
      });
   }
}

addMarker({
   coordinates:{lat: 52.9717877, lng: -9.4291244},
   content:'<h4>Brooklyn Marker</h4>'
});
addMarker({coordinates:{lat: 53.34193275, lng: -6.28672974298643},
    content:'<h4>Marker</h4>'}); // Manhattan Coordinates
}