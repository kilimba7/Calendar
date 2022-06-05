
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
var currentDayEl = $('#currentDay');
var currentHour = moment().hour();

// Add current day to <p> tag 
var currentDay = moment().format('MMMM Do, YYYY');
currentDayEl.text(currentDay);



// Generate the tasks using js
var createTasks = function () {
    for (var i = 0; i < possibleHours.length; i++) {
   

    var tasksRow = $('<div>')
        .addClass('row time-block')
        .attr({
            id: 'row-' + (i + 9)
        })

    // add 1 div with class hour
    var tasksHour = $('<div>')
        .addClass('col-1 hour')
        .text(possibleHours[i])
        .attr({
            id: i + 9
        })

    // add 1 div with class
    var tasksSpace = $('<div>')
        .addClass('col-10')
        .attr({
            id: 'time-block-' + (i + 9)
        })

    var saveBtn = $('<button>')
        .addClass('col-1 saveBtn')
        .attr({
            id: 'save-button-' + (i + 9),
            type: 'button',
        })
          // add save icon
    var saveIcon = $('<i>')
    

    // add p element with class of description
    var userInput = $('<p>')
        .addClass('description')
        .text(' ')
        .attr({
            id: 'Hour-' + (i + 9)
        });

        $(".container").append(tasksRow);
        //append timeBlockHour to TimbeBlockRow
        $(tasksRow).append(tasksHour);
        //append timeBlockEventSpace to timeBlockRow
        $(tasksRow).append(tasksSpace);
        //append <p> element to timeBlockEventSpace
        $(tasksRow).append(userInput);
        $(tasksRow).append(saveBtn);
        //append save icon to save button
        $(saveBtn).append(saveIcon);

        

    }



}
// Check to see if the task is within the possible hours 
var checkHour = function (tasksSpace) {
    //get current number for hours
        var momentHour = moment($('col-1 hour').text().trim(), 'hA').hour();
      
            if (momentHour < currentHour) {
                $(tasksSpace).addClass("past");
                $(tasksSpace).removeClass("future present");
            }
            else if (momentHour === currentHour) {
                $(tasksSpace).addClass("present");
                $(tasksSpace).removeClass("past future");
            }
            else {
                $(tasksSpace).addClass("future");
                $(tasksSpace).removeClass("past present");
            }
        }








