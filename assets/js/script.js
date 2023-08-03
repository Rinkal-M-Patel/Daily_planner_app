
    //target <p> element for currentDay to display
    var currentDayEl = $('#currentDay');
    //target containter <div>
    var containerEl = $('.container');
    //get current time in hA format
    var currentHour = days.formatDate(new Date(), 'h');
    //create array that lists all of the hours for the current workday
    var workDayHours = [
        days.formatDate(new Date().setHours(9), 'hA'),
        days.formatDate(new Date().setHours(10), 'hA'),
        days.formatDate(new Date().setHours(11), 'hA'),
        days.formatDate(new Date().setHours(12), 'hA'),
        days.formatDate(new Date().setHours(13), 'hA'),
        days.formatDate(new Date().setHours(14), 'hA'),
        days.formatDate(new Date().setHours(15), 'hA'),
        days.formatDate(new Date().setHours(16), 'hA'),
        days.formatDate(new Date().setHours(17), 'hA')
    ];
