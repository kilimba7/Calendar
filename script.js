// Array that will hold the possible hours (9-5)
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
var currentDay = moment().format('dddd, MMMM Do YYYY, h:mm a');
$('#currentDay').text(currentDay);


// Check to see if the task is within the possible hours 
var checkHour = function (tasksSpace) {
//get current number for hours
    var currentHour = moment().hour();
// Need to convert momentHour so it doens't read as 9 AM, etc. 
    var momentHour = moment().hour(i).format('h');
    console.log(momentHour, currentHour);
    

     //conditional to add correct color background to time block depending on time
     if (currentHour > momentHour) {
        $(tasksSpace).addClass('past');
        $(tasksSpace).removeClass('future present');
     }
     else if (currentHour === momentHour) {
         $(tasksSpace).addClass('present');
         $(tasksSpace).removeClass("past future");
     }
     else {
         $(tasksSpace).addClass('future');
         $(tasksSpace).removeClass('past present');
        }
};

// Generate the tasks using js
    for (var i = 0; i < possibleHours.length; i++) {
   
    // Made a div to hold the space
    var tasksRow = $('<div>')
        .addClass('row time-block')
        .attr({
            id: i + 9
        })
        
    // add div to display the hours
    var tasksHour = $('<div>')
        .addClass('col-1 hour')
        .text(possibleHours[i])
        .attr({
            id: i + 9
        })
        
    // add div to hold the input and save btn
    var tasksSpace = $('<div>')
        .addClass('col-10')
        .attr({
            id: i + 9
        })
    
    // add p element with class
    var userInput = $('<p>')
        .addClass('row')
        .text(' ')
        .attr({
            id: i + 9
        })
        
    // Save button with class 
    var saveBtn = $('<button>')
        .addClass('col-1 saveBtn')
        .text('Save')
        .attr({
            type: 'button',
            id: i + 9
        })

// Append all the elements so they show up within the container div 
    $('.container').append(tasksRow);
    $(tasksRow).append(tasksHour);
    $(tasksRow).append(tasksSpace);
    $(tasksSpace).append(userInput);
    $(tasksRow).append(saveBtn);
        
    checkHour(tasksSpace);
};

// Highlights the area where you can edit. For now, I can only click on the very top of it to display
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

// editable field was un-focused
$('.col-10').on('blur', 'textarea', function () {
    var text = $(this)
        .val()
        .trim();

    var userText = $('<p>')
        .text(text);

    $(this).replaceWith(userText);
    
});

// save btn listener to load and save the info from user input
$('.saveBtn').on('click', function () {
    //get nearby values.
    var text = $(this).siblings().last().text();
    var hour = $(this).siblings().first().text();

    //set items in local storage.
    localStorage.setItem(hour, text); 
    
    // Having trouble getting my info to appear after refreshing
     localStorage.getItem('.col-1 hour');
    
});