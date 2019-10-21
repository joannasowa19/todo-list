/* variables */
/* todays date */

/* helper functions */

/* events */
/* clicking save button */
/* takes text and saves it to local storage */

/* init */
/* check local storage object for matching id */
/* set todays date in the header */
/* color code past, current and future bars */
$(document).ready(function() {
  var dailyTasks = JSON.parse(localStorage.getItem("myDay")) || {};

  $(".js-save").on("click", function() {
    /* get the key and the value */
    var key = $(this).data("key");
    var value = $(`#${key}`).val();

    // save it local storage
    dailyTasks[key] = value;
    localStorage.setItem("myDay", JSON.stringify(dailyTasks));
  });

  /* init */
  /* pull from local storage */
  $("#hour-9").val(dailyTasks["hour-9"]);
  $("#hour-10").val(dailyTasks["hour-10"]);
  $("#hour-11").val(dailyTasks["hour-11"]);
});
