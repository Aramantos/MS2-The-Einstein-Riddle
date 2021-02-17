/*-------------------------Explanation Panel*/

$("#start-button").click(function () {
  $(".explanation-panel").addClass("explanation-zoom-out")
});

$("#back-button").click(function () {
  setTimeout(function () {
    window.location.pathname = "index.html"
  }, 2000);
  $(".bg-riddle").addClass("riddle-zoom-out")
});

/*-------------------------User Controls*/

$("#notepad-button").click(function () {
  $("#notepad").css("display", "flex") &&
    $(".clues").css("display", "none") &&
    $("#notepad-button").prop("disabled", true) &&
    $("#clues-button").prop("disabled", false) &&
    $("#hint-button").prop("disabled", false)
});

/*-------------------------Game Breaking Reset Button*/

$("#reset-button").click(function () {
  setTimeout(function () {
    window.location.pathname = "riddle.html"
  }, 2000);
  $(".bg-riddle").addClass("riddle-zoom-out")
});