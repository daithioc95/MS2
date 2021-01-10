function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 6, 
                center: {
                    lat: 53.2734,
                    lng: -7.77832031,
                }
            });

        var labels = "ABCBEFGHIJKLMNOPQRSTUVWXYZ";

            var locations = [{
                lat: 52.9717877,
                lng: -9.4291244
            }, {
                lat: 53.34193275,
                lng: -6.28672974298643
            }, {
                lat: 55.24082145,
                lng: -6.51163864
            }];

            // put form action event here depending on checkbox
            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            // make one for each category/color
            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }