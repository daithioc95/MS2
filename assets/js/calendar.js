// Evo-calendar source: https://github.com/edlynvillegas/evo-calendar
// Starting dates for each tour category
var fmDate = new Date("2021-02-12");
var fnDate = new Date("2021-02-12");
var SmDate = new Date("2021-02-13");
var SnDate = new Date("2021-02-13");
var events = [];

// for loop to add friday morning event for specified dates
// Source: https://www.foxinfotech.in/2020/03/javascript-increment-date-by-1-day-examples.html
for (var i = 0; i < 30; i++) {
    var dd = fmDate.getDate();
    var mm = fmDate.getMonth() + 1;
    var yyyy = fmDate.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    // assign event with relevant info
    var date = mm + '/' + dd + '/' + yyyy;
    fmDate.setDate(fmDate.getDate() + 7);
    events[i] = {
        id: 'Friday Morning Tour' + (i + 1), // Event's ID (required)
        name: "Morning Tour 9.00",// Event name (required)
        badge: "Book Now", // Event badge (optional)
        date: (date), // Event date (required)
        type: "event",  // Event type (required)
        color: "yellow"
    };
}

// for loop to add friday noon event for specified dates
for (var i = 30; i < 60; i++) {
    var dd = fnDate.getDate();
    var mm = fnDate.getMonth() + 1;
    var yyyy = fnDate.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    // assign event with relevant info
    var date = mm + '/' + dd + '/' + yyyy;
    fnDate.setDate(fnDate.getDate() + 7);
    events[i] = {
        id: 'Friday Noon Tour' + (i + 1), // Event's ID (required)
        name: "Noon Tour 12.00",// Event name (required)
        badge: "Book Now", // Event badge (optional)
        date: (date), // Event date (required)
        type: "holiday",  // Event type (required)
        color: "red"
    };
}

// for loop to add saturday morning event for specified dates
for (var i = 60; i < 90; i++) {
    var dd = SmDate.getDate();
    var mm = SmDate.getMonth() + 1;
    var yyyy = SmDate.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    // assign event with relevant info
    var date = mm + '/' + dd + '/' + yyyy;
    SmDate.setDate(SmDate.getDate() + 7);
    events[i] = {
        id: 'Saturday Morning Tour' + (i + 1), // Event's ID (required)
        name: "Morning Tour 9.00",// Event name (required)
        badge: "Book Now", // Event badge (optional)
        date: (date), // Event date (required)
        type: "event",  // Event type (required)
        color: "yellow"
    };
}

// for loop to add saturday evening event for specified dates
for (var i = 90; i < 120; i++) {
    var dd = SnDate.getDate();
    var mm = SnDate.getMonth() + 1;
    var yyyy = SnDate.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    // assign event with relevant info
    var date = mm + '/' + dd + '/' + yyyy;
    SnDate.setDate(SnDate.getDate() + 7);
    events[i] = {
        id: 'Saturday Noon Tour' + (i + 1), // Event's ID (required)
        name: "Noon Tour 12.00",// Event name (required)
        badge: "Book Now", // Event badge (optional)
        date: (date), // Event date (required)
        type: "holiday",  // Event type (required)
        color: "red"
    };
}

// evoCalendar functions source: source: https://github.com/edlynvillegas/evo-calendar
// initialize evo-calendar
$(document).ready(function () {
    $('#calendar').evoCalendar({
        theme: 'Royal Navy',
        calendarEvents: events
    });
});

// Open booking form on event selection
$('#calendar').on('selectEvent', function () {
    $('#exampleModalCenter').modal('toggle');
});

// Event listings toggle open automatically on date selection for mobile
// Source for media size detection: https://www.tutorialrepublic.com/faq/how-to-detect-a-mobile-device-in-jquery.php
$(document).ready(function () {
    if (window.matchMedia("(max-width: 425px)").matches) {
        $('#calendar').on('selectDate', function () {
            $('#calendar').evoCalendar('toggleEventList', true);
        });
    } else {
    }
});