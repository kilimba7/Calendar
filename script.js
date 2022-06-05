// Array that will hold the possible/present hours 9-5
var possibleHours = [
    moment().hour(9).format('hA'),
    moment().hour(10).format('hA'),
    moment().hour(11).format('hA'),
    moment().hour(12).format('hA'),
    moment().hour(13).format('hA'),
    moment().hour(14).format('hA'),
    moment().hour(15).format('hA'),
    moment().hour(16).format('hA'),
    moment().hour(17).format('hA'),
];


//This is how you get the time to display at the top of the page
var currentDay = moment().format('MMMM Do, YYYY');
$('#currentDay').text(currentDay);


// Check to see if the task is within the possible hours 
var checkHour = function (tasksSpace) {
//get current number for hours
    var currentHour = moment().hour();
    var momentHour =  moment().hour();
    console.log(momentHour, currentHour);
    

     //conditional to add correct color background to time block depending on time
     if (currentHour > momentHour) {
        $(tasksSpace).addClass('past');
        $(tasksSpace).removeClass("future present");
     }
     else if (currentHour === momentHour) {
         $(tasksSpace).addClass('present');
         $(tasksSpace).removeClass("past future");
     }
     else {
         $(tasksSpace).addClass('future');
         $(tasksSpace).removeClass("past present");
        }

    
    }

// Generate the tasks using js
    for (var i = 0; i < possibleHours.length; i++) {
   
    // Made  a div to hold the btn and user input 
    var tasksRow = $('<div>')
        .addClass('row time-block')
        
    // add 1 div with class hour
    var tasksHour = $('<div>')
        .addClass('col-1 hour')
        .text(possibleHours[i])
        
    // add 1 div with class
    var tasksSpace = $('<div>')
        .addClass('col-10')
    
    // add p element with class
    var userInput = $('<p>')
        .addClass('description')
        .text(' ')
        
    // Save button with class 
    var saveBtn = $('<button>')
        .addClass('col-1 saveBtn')
        .attr({
            type: 'button',
        })

// Append all the element so they show up within the container div 
    $(".container").append(tasksRow);
    $(tasksRow).append(tasksHour);
    $(tasksRow).append(tasksSpace);
    $(tasksSpace).append(userInput);
    $(tasksRow).append(saveBtn);
        
    checkHour(tasksSpace);
    
$('.saveBtn').on('click', function () {
    //get nearby values.
    var time = $(this).siblings().first().text();
    var text = $(this).siblings().last().text();
    console.log(time, text);
    

    //set items in local storage.
    localStorage.setItem(time, text);
});



$('.col-10').on('click', 'p', function () {
    var text = $(this)
    .text()
    .trim()

var textInput = $('<textarea>')
    .addClass('form-control')
    .val(text);

$(this).replaceWith(textInput);

textInput.trigger('focus');
});

}
//Load tasks for first time















