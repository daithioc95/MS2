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
        console.log("Checkbox is checked..");
        dropRestaurants();
    } 
    else {
        console.log("Checkbox is not checked..");
        removeRestaurants();
    }
});

document.querySelector("input[name=eventsRadio]").addEventListener('change', function() {
  if (this.checked) {
        console.log("Checkbox is checked..");
        dropEvents();
    } 
    else {
        console.log("Checkbox is not checked..");
        removeEvents();
    }
});


var attractions = [
    [52.9717877, -9.4291244, '<button class = "map-button" onclick="showAttraction1()">Cliffs of Moher</button>'], 
    [53.34193275, -6.28672974298643, '<button class = "map-button" onclick="showAttraction2()">Guiness Storehouse</button>'], 
    [55.24082145, -6.51163864, '<button class = "map-button" onclick="showAttraction3()">Giants Causeway</button>'],
    [53.34110865, -6.25267, '<button class = "map-button" onclick="showAttraction4()">National Gallery</button>'],
    [53.3606275 , -6.25263, '<button class = "map-button" onclick="showAttraction5()">Croke Park</button>'],
    [53.0112891 , -6.32609, '<button class = "map-button" onclick="showAttraction6()">Glendalough</button>']
];

var restaurants = [
    [53.3454622, -6.26411, '<button class = "map-button" onclick="showRestaurant1()">The Temple Bar</button>'], 
    [53.335436, -6.26351, '<button class = "map-button" onclick="showRestaurant2()">Coppers</button>'], 
    [53.33815205, -6.25418, '<button class = "map-button" onclick="showRestaurant3()">ODonoghues</button>'],
    [54.6021395, -5.92705, '<button class = "map-button" onclick="showRestaurant4()">Harp Bar</button>'],
    [51.9017201, -8.47109, '<button class = "map-button" onclick="showRestaurant5()">Sin é</button>']
];

var events = [
    [53.69469735, -6.47555 , '<button class = "map-button" onclick="showEvent1()">Newgrange</button>'],
    [53.3528582, -6.2645, '<button class = "map-button" onclick="showEvent2()">St. Patricks Day Festival</button>'], 
    [52.33819075, -6.46211, '<button class = "map-button" onclick="showEvent3()">Wexford Opera Festival</button>'],
    [52.0595746, -9.50532, '<button class = "map-button" onclick="showEvent4()">Ring of Kerry cycle</button>'],
    [53.62569255, -6.88866, '<button class = "map-button" onclick="showEvent5()">Púca Halloween Festival</button>']
];


var marker, i;
var infowindow = new google.maps.InfoWindow();
const attractionIcon = "http://maps.google.com/mapfiles/ms/icons/green.png";
const restaurantIcon = "http://maps.google.com/mapfiles/ms/icons/grey.png";
const eventIcon = "http://maps.google.com/mapfiles/ms/icons/orange.png";

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
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                smoothZoom(map, 12, map.getZoom());
                map.setCenter(marker.getPosition());
                infowindow.setContent(attractions[i][2]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    //                                 // Option3
    //     for (i = 0; i < attractions.length; i++) {
    //     marker = new google.maps.Marker({
    //         position: new google.maps.LatLng(attractions[i][0], attractions[i][1]),
    //         map: map,
    //         icon: attractionIcon
    //     });

    //     google.maps.event.addListener(marker, 'click', (function(marker, i) {
    //         return function() {
    //             map.setZoom(8);
    //             map.setCenter(marker.getPosition());
    //         }
    //     })(marker, i));
    // }
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
                google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                smoothZoom(map, 12, map.getZoom());
                map.setCenter(marker.getPosition());
                infowindow.setContent(restaurants[i][2]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    //                         // Option3
    //     for (i = 0; i < restaurants.length; i++) {
    //     marker = new google.maps.Marker({
    //         position: new google.maps.LatLng(restaurants[i][0], restaurants[i][1]),
    //         map: map,
    //         icon: restaurantIcon
    //     });

    //     google.maps.event.addListener(marker, 'click', (function(marker, i) {
    //         return function() {
    //             map.setZoom(8);
    //             map.setCenter(marker.getPosition());
    //         }
    //     })(marker, i));
    // }
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
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                map.setCenter(marker.getPosition());
                smoothZoom(map, 12, map.getZoom());
                infowindow.setContent(events[i][2]);
                infowindow.open(map, marker);
            }
        })(marker, i));
}
}

    function removeEvents(){
        for(i=0; i<eventsMarkers.length; i++){
            eventsMarkers[i].setMap(null);
 }
        eventsMarkers.length = 0;
}
function smoothZoom (map, max, cnt) {
    if (cnt >= max) {
        return;
    }
    else {
        z = google.maps.event.addListener(map, 'zoom_changed', function(event){
            google.maps.event.removeListener(z);
            smoothZoom(map, max, cnt + 1);
        });
        setTimeout(function(){map.setZoom(cnt)}, 80); // 80ms is what I found to work well on my system -- it might not work well on all systems
    }
}

}

function showAttraction1(){
//  var x = document.getElementById("attraction1");
//   if (x[0].style.display === "none" && x[1].style.display === "none") {
//     x[0].style.display = "block";
//     x[1].style.display = "block";
//   } else {
//     x[0].style.display = "none";
//     x[1].style.display = "none"
//   }
$(".location-image").css("display", "none");
$(".location-info").css("display", "none");
$("#attraction-image-1").toggle();
$("#attraction-intro-1").toggle();
}

function showAttraction2(){
$(".location-image").css("display", "none");
$(".location-info").css("display", "none");
$("#attraction-image-2").toggle();
$("#attraction-intro-2").toggle();
}
function showAttraction3(){
$(".location-image").css("display", "none");
$(".location-info").css("display", "none");
$("#attraction-image-3").toggle();
$("#attraction-intro-3").toggle();
}
function showAttraction4(){
$(".location-image").css("display", "none");
$(".location-info").css("display", "none");
$("#attraction-image-4").toggle();
$("#attraction-intro-4").toggle();
}
function showAttraction5(){
$(".location-image").css("display", "none");
$(".location-info").css("display", "none");
$("#attraction-image-5").toggle();
$("#attraction-intro-5").toggle();
}
function showAttraction6(){
$(".location-image").css("display", "none");
$(".location-info").css("display", "none");
$("#attraction-image-6").toggle();
$("#attraction-intro-6").toggle();
}

// Restaurant toggle
function showRestaurant1(){
$(".location-image").css("display", "none");
$(".location-info").css("display", "none");
$("#attraction-image-1").toggle();
$("#attraction-intro-1").toggle();
}

function showRestaurant2(){
$(".location-image").css("display", "none");
$(".location-info").css("display", "none");
$("#restaurant-image-2").toggle();
$("#restaurant-intro-2").toggle();
}
function showRestaurant3(){
$(".location-image").css("display", "none");
$(".location-info").css("display", "none");
$("#restaurant-image-3").toggle();
$("#restaurant-intro-3").toggle();
}
function showRestaurant4(){
$(".location-image").css("display", "none");
$(".location-info").css("display", "none");
$("#restaurant-image-4").toggle();
$("#restaurant-intro-4").toggle();
}
function showRestaurant5(){
$(".location-image").css("display", "none");
$(".location-info").css("display", "none");
$("#restaurant-image-5").toggle();
$("#restaurant-intro-5").toggle();
}

// events toggler
function showEvent1(){
$(".location-image").css("display", "none");
$(".location-info").css("display", "none");
$("#event-image-1").toggle();
$("#event-intro-1").toggle();
}

function showEvent2(){
$(".location-image").css("display", "none");
$(".location-info").css("display", "none");
$("#event-image-2").toggle();
$("#event-intro-2").toggle();
}
function showEvent3(){
$(".location-image").css("display", "none");
$(".location-info").css("display", "none");
$("#event-image-3").toggle();
$("#event-intro-3").toggle();
}
function showEvent4(){
$(".location-image").css("display", "none");
$(".location-info").css("display", "none");
$("#event-image-4").toggle();
$("#event-intro-4").toggle();
}
function showEvent5(){
$(".location-image").css("display", "none");
$(".location-info").css("display", "none");
$("#event-image-5").toggle();
$("#event-intro-5").toggle();
}

// fix toggle on button click if possible