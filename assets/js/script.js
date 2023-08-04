// Function to generate time blocks for the workday scheduler
function generateTimeBlocks() {
    // Create an array that lists all of the hours for the current workday
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
  
    // Add current day to <p> tag in the header
    const currentDate = dayjs();
    const currentHour = currentDate.hour();
  
    const container = $("#time-blocks-container");
  
    // Loop through each hour and create a time block for it
    for (let i = 0; i < totalWorkHours.length; i++) {
      const hour = workHours + i; // Calculate the hour value for this time block
      const hour1 = totalWorkHours[i]; // Get the formatted hour label
  
      const timeBlockDiv = $("<div>").addClass("row time-block");
  
      // Set the class for past, present, or future time block based on current hour
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
  
      // Append the time block to the container
      container.append(timeBlockDiv);
  
      // Update the current day display in the header
      updateCurrentDay();
    }
  }
  
  // Function to update the current day display in the header
  function updateCurrentDay() {
    const currentDate = dayjs();
    const formattedCurrentDate = currentDate.format("dddd, MMMM D, YYYY hA");
    $("#currentDay").text(formattedCurrentDate);
  }
  
  // Function to load saved data from local storage and populate the textareas
  function loadSavedData() {
    $(".time-block").each(function () {
      const hour = $(this).children(".hour").text();
      const savedData = localStorage.getItem(hour);
      if (savedData) {
        $(this).children(".description").val(savedData);
      }
    });
  }
  
  // Function to handle the save button click event and save data to local storage
  function handleSaveClick() {
    const hour = $(this).siblings(".hour").text();
    const description = $(this).siblings(".description").val();
    localStorage.setItem(hour, description);
  }
  
  // Event listener for save button click
  $(document).on("click", ".saveBtn", handleSaveClick);
  
  // Initial setup on page load
  $(document).ready(function () {
    generateTimeBlocks(); // Generate time blocks for the workday scheduler
    loadSavedData(); // Load saved data from local storage and populate textareas
  });
  