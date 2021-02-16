$(document).ready(function () {

    $("#galaxy-button").click(function () {
        $(".intro-para").addClass("intro-para-zoom-out")
    });

    $("#galaxy-button").click(function () {
        setTimeout(function () {
            window.location.pathname = "riddle.html"
        }, 5000);
        $("#galaxy-image").addClass("galaxy-zoom")
    });

});