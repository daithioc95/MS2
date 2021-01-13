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
var attractionMarkers = [];
var restaurantsMarkers = [];
var eventsMarkers = [];

document.querySelector("input[name=attractionRadio]").addEventListener('change', function() {
  if (this.checked) {
        console.log("Checkbox is checked..");
        dropAttractions();
    } 
    else {
        console.log("Checkbox is not checked..");
        removeAttractions();
    }
});

document.querySelector("input[name=restaurantsRadio]").addEventListener('change', function() {
  if (this.checked) {
        console.log("Checkbox is checked..")
        dropRestaurants();
    } 
    else {
        console.log("Checkbox is not checked..");
        removeRestaurants();
    }
});

document.querySelector("input[name=eventsRadio]").addEventListener('change', function() {
  if (this.checked) {
        console.log("Checkbox is checked..")
        dropEvents();
    } 
    else {
        console.log("Checkbox is not checked..");
        removeEvents();
    }
});


var attractions = [
    [52.9717877, -9.4291244, '<h1>1</h1>'], 
    [53.34193275, -6.28672974298643, '<h1>2</h1>'], 
    [55.24082145, -6.51163864, '<h1>3</h1>']
];

var restaurants = [
    [53.3454622, -6.26411, '<h1>1</h1>'], 
    [53.335436, -6.26351, '<h1>2</h1>'], 
    [53.33815205, -6.25418, '<h1>3</h1>']
];


var events = [
    [53.69469735, -6.47555 , '<h1>1</h1>'],
    [53.3528582, -6.2645, '<h1>2</h1>'], 
    [52.33819075, -6.46211, '<h1>3</h1>']
];


var marker, i;
const attractionIcon = "http://maps.google.com/mapfiles/ms/icons/red.png";
const restaurantIcon = "http://maps.google.com/mapfiles/ms/icons/green.png";
const eventIcon = "http://maps.google.com/mapfiles/ms/icons/blue.png";

    function dropAttractions(){
        for (i = 0; i < attractions.length; i++) {
        marker = new google.maps.Marker({
        position: new google.maps.LatLng(attractions[i][0], attractions[i][1]),
        map: map,
        title: attractions[i][2],
        animation: google.maps.Animation.DROP,
        icon: attractionIcon,
        })
        attractionMarkers.push(marker);
        }}

    function removeAttractions(){
        for(i=0; i<attractionMarkers.length; i++){
            attractionMarkers[i].setMap(null);
 }
        attractionMarkers.length = 0;
}

    function dropRestaurants(){
        for (i = 0; i < restaurants.length; i++) {
        marker = new google.maps.Marker({
        position: new google.maps.LatLng(restaurants[i][0], restaurants[i][1]),
        map: map,
        title: restaurants[i][2],
        animation: google.maps.Animation.DROP,
        icon: restaurantIcon
        });
        restaurantsMarkers.push(marker);
    }}

    function removeRestaurants(){
        for(i=0; i<restaurantsMarkers.length; i++){
            restaurantsMarkers[i].setMap(null);
 }
        restaurantsMarkers.length = 0;
}
        
    function dropEvents(){
    for (i = 0; i < events.length; i++) {
        marker = new google.maps.Marker({
        position: new google.maps.LatLng(events[i][0], events[i][1]),
        map: map,
        title: events[i][2],
        animation: google.maps.Animation.DROP,
        icon: eventIcon
    });
        eventsMarkers.push(marker);
}}
    function removeEvents(){
        for(i=0; i<eventsMarkers.length; i++){
            eventsMarkers[i].setMap(null);
 }
        eventsMarkers.length = 0;
}
}

// next steps : event handlers for markers clicks, eg. zoom, prompt html etc.