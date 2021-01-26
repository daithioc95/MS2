// Current date is 25th March 2020
var fmDate = new Date("2021-02-12");
var fnDate = new Date("2021-02-12");
var SmDate = new Date("2021-02-13");
var SnDate = new Date("2021-02-13");
var events = [];

for (var i=0; i<30; i++) {
  var dd = fmDate.getDate();
  var mm = fmDate.getMonth()+1; 
  var yyyy = fmDate.getFullYear();

  if(dd<10) 
  {
      dd='0'+dd;
  } 
  if(mm<10) 
  {
      mm='0'+mm;
  } 

 var date = mm+'/'+dd+'/'+yyyy; 
 fmDate.setDate(fmDate.getDate() + 7);  
    events[i] = {
        id: 'Friday Morning Tour' + (i+1) , // Event's ID (required)
        name: "Morning Tour 9.00",// Event name (required)
        badge: "Book Now", // Event badge (optional)
        date: (date), // Event date (required)
        type: "event",  // Event type (required)
        color: "yellow"
    };
}
// https://www.foxinfotech.in/2020/03/javascript-increment-date-by-1-day-examples.html

for (var i=30; i<60; i++) {
  var dd = fnDate.getDate();
  var mm = fnDate.getMonth()+1; 
  var yyyy = fnDate.getFullYear();

  if(dd<10) 
  {
      dd='0'+dd;
  } 
  if(mm<10) 
  {
      mm='0'+mm;
  } 

 var date = mm+'/'+dd+'/'+yyyy; 
 fnDate.setDate(fnDate.getDate() + 7);  
    events[i] = {
        id: 'Friday Noon Tour' + (i+1) , // Event's ID (required)
        name: "Noon Tour 12.00",// Event name (required)
        badge: "Book Now", // Event badge (optional)
        date: (date), // Event date (required)
        type: "holiday",  // Event type (required)
        color: "red"
    };
}

for (var i=60; i<90; i++) {
  var dd = SmDate.getDate();
  var mm = SmDate.getMonth()+1; 
  var yyyy = SmDate.getFullYear();

  if(dd<10) 
  {
      dd='0'+dd;
  } 
  if(mm<10) 
  {
      mm='0'+mm;
  } 

 var date = mm+'/'+dd+'/'+yyyy; 
 SmDate.setDate(SmDate.getDate() + 7);  
    events[i] = {
        id: 'Saturday Morning Tour' + (i+1) , // Event's ID (required)
        name: "Morning Tour 9.00",// Event name (required)
        badge: "Book Now", // Event badge (optional)
        date: (date), // Event date (required)
        type: "event",  // Event type (required)
        color: "yellow"
    };
}

for (var i=90; i<120; i++) {
  var dd = SnDate.getDate();
  var mm = SnDate.getMonth()+1; 
  var yyyy = SnDate.getFullYear();

  if(dd<10) 
  {
      dd='0'+dd;
  } 
  if(mm<10) 
  {
      mm='0'+mm;
  } 

 var date = mm+'/'+dd+'/'+yyyy; 
 SnDate.setDate(SnDate.getDate() + 7);  
    events[i] = {
        id: 'Saturday Noon Tour' + (i+1) , // Event's ID (required)
        name: "Noon Tour 12.00",// Event name (required)
        badge: "Book Now", // Event badge (optional)
        date: (date), // Event date (required)
        type: "holiday",  // Event type (required)
        color: "red"
    };
}

// initialize evo-calendar
$(document).ready(function () {
    $('#calendar').evoCalendar({
        theme: 'Royal Navy',
        calendarEvents: events
    })
})



            // [

            //     {
            //         id: '00001', // Event's ID (required)
            //         name: "Morning Tour 9.00", // Event name (required)
            //         badge: "Book Now", // Event badge (optional)
            //         date: ["February/12/2021", "February/14/2021"], // Date range
            //         type: "event", // Event type (required)
            //         color: "yellow"
            //     },
            //     {
            //         id: '00002', // Event's ID (required)
            //         name: "Noon Tour 12.00", // Event name (required)
            //         badge: "Book Now", // Event badge (optional)
            //         date: ["02/12/2021", "02/14/2021"], // Date range
            //         type: "event", // Event type (required)
            //         color: "red"
            //     },
            // ]


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


// const el1 = document.getElementsByClassName("event-title").querySelector("span");
// const el2 = document.querySelector(/* ... */)

// document.getElementsByClassName("day").addEventListener('click', function () {
//     toggleEventList();
// });

// document.querySelectorAll('.day').forEach(item => {
//   item.addEventListener('click', event => {
//     toggleEventList();
//   })
// })
// $('#calendar').on('selectDate', function(event, newDate, oldDate) {
//      toggleEventList();
// });



$('#calendar').on('selectEvent', function(event, activeEvent) {
     $('#exampleModalCenter').modal('toggle')
    console.log("selected");
});