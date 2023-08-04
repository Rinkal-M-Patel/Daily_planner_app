
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


}

function updateCurrentDay() {
    const currentDate = dayjs();
    const formattedCurrentDate = currentDate.format("dddd, MMMM D, YYYY hA");
    $("#currentDay").text(formattedCurrentDate);
  }