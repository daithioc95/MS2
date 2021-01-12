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
// function initMap() {
//    var options = {
//       zoom:6,
//       center: { lat: 53.2734,
//                 lng: -7.77832031} //Coordinates of Ireland
//    }
// var map = new google.maps.Map(document.getElementById('map'), options);

// function addMarker(prop) {
// //    var marker = new google.maps.Marker({
// //       position: prop.coordinates, // Passing the coordinates
// //       map:map, //Map that we need to add
// //       draggarble: false// If set to true you can drag the marker
// //    });
// //    if(prop.iconImage) { marker.setIcon(prop.iconImage); }

//    if(prop.content) { 
//       var information = new google.maps.InfoWindow({
//       content: prop.content
//       });
      
//       marker.addListener('click', function() {
//       information.open(map, marker);
//       map.setZoom(8);
//       map.setCenter(marker.getPosition());
//       });


//    }
// }


// }

// Fresh Code
function initMap() {
   var options = {
      zoom:6,
      center: { lat: 53.2734,
                lng: -7.77832031} //Coordinates of Ireland
   }
var map = new google.maps.Map(document.getElementById('map'), options);

//  autocomplete.addListener('place_changed', onPlaceChanged); 

document.querySelector("input[name=attractionRadio]").addEventListener('change', function() {
  if (this.checked) {
    onPlaceChanged();
  } 
});
//  document.querySelector('attractionRadio').addEventListener("CheckboxStateChange", onPlaceChanged); 
 document.getElementById('restaurantsRadio').addEventListener("CheckboxStateChange", onPlaceChanged); 
 document.getElementById('eventsRadio').addEventListener("CheckboxStateChange", onPlaceChanged);
}

var attractions = [
    [52.9717877, -9.4291244, '<h1>1</h1>'], 
    [53.34193275, -6.28672974298643, '<h1>2</h1>'], 
    [55.24082145, -6.51163864, '<h1>3</h1>']
];

var restaurants = [{
    lat: 53.3454622 ,
    lng: -6.26411,
    content: '<h1>1</h1>'
}, {
    lat: 53.335436,
    lng: -6.26351,
    content: '<h1>2</h1>'
}, {
    lat: 53.33815205,
    lng: -6.25418,
    content: '<h1>3</h1>'
}];


var events = [{
    lat: 53.69469735,
    lng: -6.47555 ,
    content: '<h1>1</h1>'
}, {
    lat: 53.3528582 ,
    lng: -6.2645,
    content: '<h1>2</h1>'
}, {
    lat: 52.33819075 ,
    lng: -6.46211 ,
    content: '<h1>3</h1>'
}];

function onPlaceChanged() {
    document.querySelector("input[name=attractionRadio]").addEventListener('change', function() {
        if (this.checked) {
        dropAttractions();
  } 
});
//      else if ($("#restaurantsRadio").is(':checked')) {
//         dropRestaurants();
// }
//      else if ($("#eventsRadio").is(':checked')) {
//         dropEvents();
//      }
}

function dropAttractions(){
    for (let i = 0; i < attractions.length; i++) {
        const attraction = attractions[i];
        return new google.maps.Marker({
            position: { lat: attractions[1], lng: attractions[2] },
            map,
            animation : google.maps.Animation.DROP,
            icon: "lib/images/green-dot.png"
    });
  }
}