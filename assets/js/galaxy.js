$(document).ready(function () {

    $("#galaxy-button").click(function () {
        $(".intro-para").addClass("intro-para-zoom-out")
        $("#header").addClass("header-rise")
        $("#footer").addClass("footer-drop")
    });

    $("#galaxy-button").click(function () {
        setTimeout(function () {
            window.location.pathname = "/riddle.html"
        }, 5000);
        $("#galaxy-image").addClass("galaxy-zoom")
    });

});