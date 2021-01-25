// Tour map
// https://stackoverflow.com/questions/3059044/google-maps-js-api-v3-simple-multiple-marker-example
function initMap() {
var locations = [
      ['The Spire', 53.34980185, -6.260254192, 8],
      ['The General Post Office', 53.3492426, -6.2604887, 7],	
      ['The Millennium Bridge & the River Liffey', 53.3461943, -6.2651197, 6],
      ['Temple Bar', 53.3454957, -6.2631139, 5], 
      ['Dublin Castle', 53.34316685, -6.268430274, 4], 
      ['Christ Church Cathedral', 53.3434153, -6.271226869, 3],
      ['City Hall', 53.34384225	-6.267189735, 2],
      ['Trinity College', 53.34366745, -6.254444725, 1] 
    ];

    var map2 = new google.maps.Map(document.getElementById('map2'), {
      zoom: 14,
      center: new google.maps.LatLng(53.34498717457293, -6.264434712588703),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map2
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map2, marker);
        }
         })(marker, i));
    }}