// Map initialization
// Source1: https://developers.google.com/maps/documentation/javascript/maptypes
// Source2: https://stackoverflow.com/questions/3059044/google-maps-js-api-v3-simple-multiple-marker-example

function initMap() {
    var options = {
        zoom: 6,
        center: {
            lat: 53.2734,
            lng: -7.77832031
        } //Coordinates of Ireland
    };
    // implementing markers
    var map = new google.maps.Map(document.getElementById('map'), options);
    var attractionMarkers = [];
    var restaurantsMarkers = [];
    var eventsMarkers = [];

    // Trigger function on checkbox
    // Source: https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
    document.querySelector("input[name=attractionRadio]").addEventListener('change', function () {
        if (this.checked) {
            dropAttractions();
        }
        else {
            removeAttractions();
        }
    });

    document.querySelector("input[name=restaurantsRadio]").addEventListener('change', function () {
        if (this.checked) {
            dropRestaurants();
        }
        else {
            removeRestaurants();
        }
    });

    document.querySelector("input[name=eventsRadio]").addEventListener('change', function () {
        if (this.checked) {
            dropEvents();
        }
        else {
            removeEvents();
        }
    });

    // Array of attractions information
    var attractions = [
        [52.9717877, -9.4291244, '<button class = "map-button" onclick="onAttractionClicked(1)">Cliffs of Moher</button>'],
        [53.34193275, -6.28672974298643, '<button class = "map-button" onclick="onAttractionClicked(2)">Guiness Storehouse</button>'],
        [55.24082145, -6.51163864, '<button class = "map-button" onclick="onAttractionClicked(3)">Giants Causeway</button>'],
        [53.34110865, -6.25267, '<button class = "map-button" onclick="onAttractionClicked(4)">National Gallery</button>'],
        [53.3606275, -6.25263, '<button class = "map-button" onclick="onAttractionClicked(5)">Croke Park</button>'],
        [53.0112891, -6.32609, '<button class = "map-button" onclick="onAttractionClicked(6)">Glendalough</button>']
    ];

    // Array of restaurants information
    var restaurants = [
        [53.3454622, -6.26411, '<button class = "map-button" onclick="onRestaurantClicked(1)">The Temple Bar</button>'],
        [53.335436, -6.26351, '<button class = "map-button" onclick="onRestaurantClicked(2)">Coppers</button>'],
        [53.33815205, -6.25418, '<button class = "map-button" onclick="onRestaurantClicked(3)">ODonoghues</button>'],
        [54.6021395, -5.92705, '<button class = "map-button" onclick="onRestaurantClicked(4)">Harp Bar</button>'],
        [51.9017201, -8.47109, '<button class = "map-button" onclick="onRestaurantClicked(5)">Sin é</button>']
    ];

    // Array of events information
    var events = [
        [53.69469735, -6.47555, '<button class = "map-button" onclick="onEventClicked(1)">Newgrange</button>'],
        [53.3528582, -6.2645, '<button class = "map-button" onclick="onEventClicked(2)">St. Patricks Day Festival</button>'],
        [52.33819075, -6.46211, '<button class = "map-button" onclick="onEventClicked(3)">Wexford Opera Festival</button>'],
        [52.0595746, -9.50532, '<button class = "map-button" onclick="onEventClicked(4)">Ring of Kerry cycle</button>'],
        [53.62569255, -6.88866, '<button class = "map-button" onclick="onEventClicked(5)">Púca Halloween Festival</button>']
    ];

    // initializing variables to drop markers
    var marker, i;
    var infowindow = new google.maps.InfoWindow();
    const attractionIcon = "http://maps.google.com/mapfiles/ms/icons/green.png";
    const restaurantIcon = "http://maps.google.com/mapfiles/ms/icons/grey.png";
    const eventIcon = "http://maps.google.com/mapfiles/ms/icons/orange.png";

    // Function to drop attraction markers
    // Source: https://developers.google.com/maps/documentation/javascript/markers

    function dropAttractions() {
        for (let i = 0; i < attractions.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(attractions[i][0], attractions[i][1]),
                map: map,
                title: attractions[i][2],
                animation: google.maps.Animation.DROP,
                icon: attractionIcon,
            })
            attractionMarkers.push(marker);
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    smoothZoom(map, 12, map.getZoom());
                    map.setCenter(marker.getPosition());
                    infowindow.setContent(attractions[i][2]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    }
    // Function to remove attraction markers
    // Source: https://intellipaat.com/community/26710/google-maps-api-v3-how-to-remove-all-markers

    function removeAttractions() {
        for (i = 0; i < attractionMarkers.length; i++) {
            attractionMarkers[i].setMap(null);
        }
        attractionMarkers.length = 0;
    }

    // Function to drop restaurant markers
    function dropRestaurants() {
        for (let i = 0; i < restaurants.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(restaurants[i][0], restaurants[i][1]),
                map: map,
                title: restaurants[i][2],
                animation: google.maps.Animation.DROP,
                icon: restaurantIcon
            });
            restaurantsMarkers.push(marker);
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    smoothZoom(map, 12, map.getZoom());
                    map.setCenter(marker.getPosition());
                    infowindow.setContent(restaurants[i][2]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    }

    // Function to remove restaurant markers
    function removeRestaurants() {
        for (i = 0; i < restaurantsMarkers.length; i++) {
            restaurantsMarkers[i].setMap(null);
        }
        restaurantsMarkers.length = 0;
    }

    // Function to drop event markers
    function dropEvents() {
        for (let i = 0; i < events.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(events[i][0], events[i][1]),
                map: map,
                title: events[i][2],
                animation: google.maps.Animation.DROP,
                icon: eventIcon
            });
            eventsMarkers.push(marker);
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    map.setCenter(marker.getPosition());
                    smoothZoom(map, 12, map.getZoom());
                    infowindow.setContent(events[i][2]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    }

    // Function to remove event markers
    function removeEvents() {
        for (i = 0; i < eventsMarkers.length; i++) {
            eventsMarkers[i].setMap(null);
        }
        eventsMarkers.length = 0;
    }

    // Function to zoom in smoothly from a far distance
    // Source: https://stackoverflow.com/questions/4752340/how-to-zoom-in-smoothly-on-a-marker-in-google-maps
    function smoothZoom(map, max, cnt) {
        if (cnt >= max) {
            return;
        }
        else {
            z = google.maps.event.addListener(map, 'zoom_changed', function (event) {
                google.maps.event.removeListener(z);
                smoothZoom(map, max, cnt + 1);
            });
            setTimeout(function () { map.setZoom(cnt) }, 80);
        }
    }
}

// Attraction  toggle function
function onAttractionClicked(itemNumber) {
    $(".location-image").css("display", "none");
    $(".location-info").css("display", "none");

    const attractionImageId = `#attraction-image-${itemNumber}`;
    const attractionIntroId = `#attraction-intro-${itemNumber}`;

    $(attractionImageId).toggle();
    $(attractionIntroId).toggle();
}

// Restaurant display toggle function
function onRestaurantClicked(itemNumber) {
    $(".location-image").css("display", "none");
    $(".location-info").css("display", "none");

    const restaurantImageId = `#restaurant-image-${itemNumber}`;
    const restaurantIntroId = `#restaurant-intro-${itemNumber}`;

    $(restaurantImageId).toggle();
    $(restaurantIntroId).toggle();
}

// events display toggler function
function onEventClicked(itemNumber) {
    $(".location-image").css("display", "none");
    $(".location-info").css("display", "none");

    const eventImageId = `#event-image-${itemNumber}`;
    const eventIntroId = `#event-intro-${itemNumber}`;

    $(eventImageId).toggle();
    $(eventIntroId).toggle();
}