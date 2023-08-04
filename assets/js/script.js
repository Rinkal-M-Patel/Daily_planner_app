
function generateTimeBlocks() {
    //create array that lists all of the hours for the current workday
    const workHours = 9; // Start time for work hours (9AM)
    const totalWorkHours = [
    dayjs().hour(9).format('hA'),
    dayjs().hour(10).format('hA'),
    dayjs().hour(11).format('hA'),
    dayjs().hour(12).format('hA'),
    dayjs().hour(13).format('hA'),
    dayjs().hour(14).format('hA'),
    dayjs().hour(15).format('hA'),
    dayjs().hour(16).format('hA'),
    dayjs().hour(17).format('hA')
    ];

    
    //add current day to <p> tag in the header
    const currentDate = dayjs();
    const currentHour = currentDate.hour();

    const container = $("#time-blocks-container");

    for (let i = 0; i < totalWorkHours.length; i++) {
        const hour = workHours + i;
       const hour1 = totalWorkHours[i];
      console.log(hour + " " +  currentHour );
      
      const timeBlockDiv = $("<div>").addClass("row time-block");

      // Set the class for past, present, or future time block
      if (hour < currentHour) {
        timeBlockDiv.addClass("past");
      } else if (hour === currentHour) {
        timeBlockDiv.addClass("present");
      } else {
        timeBlockDiv.addClass("future");
      }

      // Create the HTML structure for each time block
      timeBlockDiv.html(`
        <div class="col-1 hour">${hour1}</div>
        <textarea class="col-10 description"></textarea>
        <button class="col-1 saveBtn"><i class="fas fa-save"></i></button>
      `);

      container.append(timeBlockDiv);
      updateCurrentDay();
    }

}

function updateCurrentDay() {
    const currentDate = dayjs();
    const formattedCurrentDate = currentDate.format("dddd, MMMM D, YYYY hA");
    $("#currentDay").text(formattedCurrentDate);
  }

   // Function to load saved data from local storage
   function loadSavedData() {
    $(".time-block").each(function () {
      const hour = $(this).children(".hour").text();
      const savedData = localStorage.getItem(hour);
      if (savedData) {
        $(this).children(".description").val(savedData);
      }
    });
  }