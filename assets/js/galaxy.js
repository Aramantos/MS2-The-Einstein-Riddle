$(document).ready(function () {
    $("#galaxy-button").click(function () {
        $(".intro-para").addClass("intro-para-zoom-out");
        $("#header").addClass("header-rise");
        $("#footer").addClass("footer-drop");
    });

    $("#galaxy-button").click(function () {
        setTimeout(function () {
            document.location.href = "riddle.html"
        }, 5000);
        $("#galaxy-image").addClass("galaxy-zoom");
    });
});