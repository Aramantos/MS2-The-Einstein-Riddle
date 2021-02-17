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

/*-------------------------Game Breaking Reset Button*/

$("#reset-button").click(function () {
  setTimeout(function () {
    window.location.pathname = "riddle.html"
  }, 2000);
  $(".bg-riddle").addClass("riddle-zoom-out")
});