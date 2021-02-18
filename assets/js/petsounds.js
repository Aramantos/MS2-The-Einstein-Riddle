String.prototype.crosscheck = function () {
    return this.toUpperCase().trim();
};

$(document).ready(function () {

    const answerArray = [["Norwegian", "Dane", "Brit", "German", "Swede"], ["yellow", "blue", "red", "green", "white"],
    ["cats", "horses", "birds", "fish", "dogs"], ["Dunhill", "Blends", "Pall Mall", "Prince", "Bluemaster"],
    ["water", "tea", "milk", "coffee", "beer"]];

    var cats = new Audio('./assets/media/cat.mp4');
    var horses = new Audio('./assets/media/horse.mp4');
    var birds = new Audio('./assets/media/bird.mp4');
    var dogs = new Audio('./assets/media/dog.mpeg');

    $("#B3").on("change", function () {
        if (answerArray[2][0].crosscheck() === $("#B3").val().crosscheck())
            cats.play();
    });

    $("#C3").on("change", function () {
        if (answerArray[2][1].crosscheck() === $("#C3").val().crosscheck())
            horses.play();
    });

    $("#D3").on("change", function () {
        if (answerArray[2][2].crosscheck() === $("#D3").val().crosscheck())
            birds.play();
    });

    $("#F3").on("change", function () {
        if (answerArray[2][4].crosscheck() === $("#F3").val().crosscheck())
            dogs.play();
    });

});