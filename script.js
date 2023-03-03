// Tells the date and time and added an event listener 

$(document).ready(function () {
  $("#currentDay").text(moment().format("MMMM D YYYY, H:MM:SS A")); 

  $(".saveBtn").on("click", function () {
      console.log(this);
      var text = $(this).siblings(".description").val(); 
      var time = $(this).parent().attr("id"); 
      localStorage.setItem(time, text);
  })
  
  // The local storage of the hours 
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  // Used link to get current time and date 

  function hourTracker() {
      var currentTimeHour = moment().hour(); 

      // Used "if, else" loop to add or remove given the time
      $(".time-block").each(function () {
          var blockHour = parseInt($(this).attr("id").split("hour")[1]);
          console.log( blockHour, currentTimeHour)
          if (blockHour < currentTimeHour) {
              $(this).addClass("past");
              $(this).removeClass("future");
              $(this).removeClass("present");
          }
          else if (blockHour === currentTimeHour) {
              $(this).removeClass("past");
              $(this).addClass("present");
              $(this).removeClass("future");
          }
          else {
              $(this).removeClass("present");
              $(this).removeClass("past");
              $(this).addClass("future");
          }
      })
  }
  hourTracker(); 
})
  