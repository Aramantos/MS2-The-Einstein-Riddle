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

$("#hint-button").click(function () {
  $("#hint").css("display", "block") &&
    $(".clues").css("display", "none") &&
    $("#notepad").css("display", "none") &&
    $("#hint-checker").css("display", "block") &&
    $("#hint-button").prop("disabled", true) &&
    $("#notepad-button").prop("disabled", false) &&
    $("#clues-button").prop("disabled", false)
});

$("#hint-yes").click(function () {
  $("#hint-checker").css("display", "none")
  $("#hint-text").css("display", "block")
});

$("#hint-no").click(function () {
  $("#hint").css("display", "none")
  $("#hint-checker").css("display", "none")
  $("#no-hint").css("display", "block")
});

$("#clues-button").click(function () {
  $(".clues").css("display", "block") &&
    $("#notepad").css("display", "none") &&
    $("#hint").css("display", "none") &&
    $("#hint-checker").css("display", "none") &&
    $("#no-hint").css("display", "none") &&
    $("#clues-button").prop("disabled", true) &&
    $("#notepad-button").prop("disabled", false) &&
    $("#hint-button").prop("disabled", false)
});

$("#notepad-button").click(function () {
  $("#notepad").css("display", "flex") &&
    $(".clues").css("display", "none") &&
    $("#hint").css("display", "none") &&
    $("#hint-checker").css("display", "none") &&
    $("#no-hint").css("display", "none") &&
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

/*-------------------------Congratulation Buttons*/

$("#finished-reset").click(function () {
  setTimeout(function () {
    window.location.pathname = "riddle.html"
  }, 2000);
  $(".bg-riddle").addClass("riddle-zoom-out")
});

$("#return-galaxy").click(function () {
  setTimeout(function () {
    window.location.pathname = "index.html"
  }, 2000);
  $(".bg-riddle").addClass("riddle-zoom-out")
});