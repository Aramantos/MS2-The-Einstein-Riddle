/*-------------------------Explanation Panel*/

$("#start-button").click(function () {
  $(".explanation-panel").css("display", "none")
});

$("#back-button").click(function () {
  setTimeout(function () {
    window.location.pathname = "index.html"
  }, 2000);
  $(".bg-riddle").addClass("riddle-zoom-out")
});