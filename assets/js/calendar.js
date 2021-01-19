// initialize evo-calendar
$(document).ready(function () {
    $('#calendar').evoCalendar({
        theme: 'Royal Navy',
        calendarEvents:
            [

                {
                    id: '00001', // Event's ID (required)
                    name: "Morning Tour 9.00", // Event name (required)
                    badge: "Book Now", // Event badge (optional)
                    date: ["February/12/2021", "February/14/2021"], // Date range
                    type: "event", // Event type (required)
                    color: "yellow"
                },
                {
                    id: '00002', // Event's ID (required)
                    name: "Noon Tour 12.00", // Event name (required)
                    badge: "Book Now", // Event badge (optional)
                    date: ["February/12/2021", "February/14/2021"], // Date range
                    type: "event", // Event type (required)
                    color: "red"
                },
            ]
    })
})

// var events = [];
// for (var i=0; i<3; i++) {
//     var start = 12;
//     events[i] = {
//         id: 'Friday Tour' + i+1 , // Event's ID (required)
//         name: "Friday Morning Tour 9.00am",// Event name (required)
//         date: "February/"+ (start + i*7) +"/2021", // Event date (required)
//         type: "holiday"  // Event type (required)
//     };
// }
// console.log(events);

// var title = [];
// for (var i=0; i<3; i++) {
//     title[i] = {
//         name: "name" + i+1,
//         age: "age" + i+1,
//         hometown: "hometown" + i+1
//     };
// }
// console.log(title);