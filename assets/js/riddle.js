String.prototype.crosscheck = function () {
    return this.toUpperCase().trim();
};

$(document).ready(function () {

    const answerArray = [["Norwegian", "Dane", "Brit", "German", "Swede"], ["yellow", "blue", "red", "green", "white"],
    ["cats", "horses", "birds", "fish", "dogs"], ["Dunhill", "Blends", "Pall Mall", "Prince", "Bluemaster"],
    ["water", "tea", "milk", "coffee", "beer"]];

    const riddleAnswers = {

        /* Nationalities */
        B1: "Norwegian",
        C1: "Dane",
        D1: "Brit",
        E1: "German",
        F1: "Swede",

        /* Colour */
        B2: "yellow",
        C2: "blue",
        D2: "red",
        E2: "green",
        F2: "white",

        /* Pets */
        B3: "cats",
        C3: "horses",
        D3: "birds",
        E3: "fish",
        F3: "dogs",

        /* Smokes */
        B4: "Dunhill",
        C4: "Blends",
        D4: "Pall Mall",
        E4: "Prince",
        F4: "Bluemaster",

        /* Beverages */
        B5: "water",
        C5: "tea",
        D5: "milk",
        E5: "coffee",
        F5: "beer"
    };

    let correctAnswer = false; // variable to allow picture to change when correct answer is inputted

    let incorrectAnswer = false; // variable to allow picture to change when wrong answer is inputted
    var incorrect = new Audio('./assets/media/incorrect.mp3')
    /* --- CREDIT: Audio: https://www.youtube.com/watch?v=36_bISAhExo --- */

    $(".answers").on("change", function () { // If user attempts to break the game this function disables the riddle
        if (breakingProtection($(this).val().crosscheck())) {
            clearInterval(picRotationInterval);
            { $("#einstein-pic").attr("src", "assets/images/einstein-animation/cheat-pic.jpg") };
            $(".answers").prop("disabled", true);
            $(".breaking-game-warning").css("display", "block");
            $("#reset-button").css("display", "block");
            $(".clues").css("display", "none");
            $(".controls").css("display", "none");
            return false
        }
        if ($(this).val().crosscheck() !== riddleAnswers[this.id].crosscheck()) { // Clears input field if wrong answer value is inputted
            $(this).val("");
            incorrectAnswer = true // Injects wrong.pic into rotation temporarily
            incorrect.play();
        }

        else {
            correctAnswer = true // Injects wink.pic into rotation temporarily
        };

        if ($(this).val().crosscheck() === riddleAnswers[this.id].crosscheck()) {
            $(this).prop("disabled", true).css("background-color", "white"); // Disables input if correct answer is entered
        }
            
        panelSwticher(); // When an answer in entered, it swtiches the clues-control panel back to clues
        riddleCorrect(); // Checks all answers are correct, then changes picture to einstein-victory.gif
        clueCorrect(); // Crosses out clue when corresponding answers are in the correct value fields
        nationalitiesFlags(); // Changes background of nationalities row inputs when correct value is entered
        houseColour(); // Changes house icon colour to the corresponding colour of the correct answer
        houseInput(); // When correct answer is entered the input border and/or background changes colour to highlight corresponding colour
        smokingAnswer(); // When correct answer is entered smoking gif is shown in the background
        drinksAnswer(); // When correct answer is inputted the background image changes to a picture of the corresponding answer

    });

    function riddleCorrect() { // Checks all answers are correct, then changes picture to einstein-victory.gif

        var celebration = new Audio('./assets/media/celebration.mp3')
        /* --- CREDIT: Audio: https://vimeo.com/335541134 --- */

        let result = false;

        $(".answers").each(function () {
            result = $(this).val().crosscheck() === riddleAnswers[this.id].crosscheck() ? true : false;
            return result;
        });
        if (result == true) {
            $(".congratulations").css("display", "block");
            $(".clues").css("display", "none");
            $("#hint").css("display", "none");
            $("#no-hint").css("display", "none");
            $("#notepad").css("display", "none");
            $("#hint-checker").css("display", "none");
            $(".controls").css("display", "none");
            $("#fish-victory").css("display", "block");
            $(".bg-riddle").addClass("confeti");
            $(".riddle-table").addClass("confeti");
            $(".clues-controls").addClass("confeti");
            /* --- CREDIT: Image: https://gifprint.s3.amazonaws.com/p/gif/91022/01da72904cf201382527266021f15734.gif --- */
            clearInterval(picRotationInterval);
            { $("#einstein-pic").attr("src", "assets/images/einstein-victory.gif") };
            /* --- CREDIT: Image: https://wifflegif.com/gifs/662977-albert-einstein-insanity-gif --- */
            celebration.play()
        }
        return result;
    }

    function panelSwticher() { // When an answer in entered, it swtiches the clues-control panel back to clues
        $(".clues").css("display", "block") &&
            $("#notepad").css("display", "none") &&
            $("#hint").css("display", "none") &&
            $("#hint-checker").css("display", "none") &&
            $("#no-hint").css("display", "none") &&
            $("#clues-button").prop("disabled", true) &&
            $("#notepad-button").prop("disabled", false) &&
            $("#hint-button").prop("disabled", false)
    }

    function clueCorrect() { // Crosses out specific clue when corresponding answer(s) are in the correct value fields

        if (answerArray[0][0].crosscheck() === $("#B1").val().crosscheck()) /*Norwegian*/
            $("#clue-9").addClass("line-through");

        if (answerArray[4][2].crosscheck() === $("#D5").val().crosscheck()) /*milk*/
            $("#clue-8").addClass("line-through");

        if (answerArray[1][1].crosscheck() === $("#C2").val().crosscheck()) /*blue*/
            $("#clue-14").addClass("line-through");

        if (answerArray[1][3].crosscheck() === $("#E2").val().crosscheck() &&
            answerArray[1][4].crosscheck() === $("#F2").val().crosscheck()) /*green and white*/
            $("#clue-4").addClass("line-through");

        if (answerArray[1][2].crosscheck() === $("#D2").val().crosscheck() &&
            answerArray[0][2].crosscheck() === $("#D1").val().crosscheck()) /*red and Brit*/
            $("#clue-1").addClass("line-through");

        if (answerArray[4][3].crosscheck() === $("#E5").val().crosscheck()) /*coffee*/
            $("#clue-5").addClass("line-through");

        if (answerArray[3][0].crosscheck() === $("#B4").val().crosscheck()) /*Dunhill*/
            $("#clue-7").addClass("line-through");

        if (answerArray[2][1].crosscheck() === $("#C3").val().crosscheck()) /*horses*/
            $("#clue-11").addClass("line-through");

        if (answerArray[3][1].crosscheck() === $("#C4").val().crosscheck()) /*blends*/
            $("#clue-15").addClass("line-through");

        if (answerArray[3][4].crosscheck() === $("#F4").val().crosscheck() &&
            answerArray[4][4].crosscheck() === $("#F5").val().crosscheck()) /*Bluemaster and beer*/
            $("#clue-12").addClass("line-through");

        if (answerArray[0][1].crosscheck() === $("#C1").val().crosscheck() &&
            answerArray[4][1].crosscheck() === $("#C5").val().crosscheck()) /*Dane and tea*/
            $("#clue-3").addClass("line-through");

        if (answerArray[0][3].crosscheck() === $("#E1").val().crosscheck() &&
            answerArray[3][3].crosscheck() === $("#E4").val().crosscheck()) /*German and Prince*/
            $("#clue-13").addClass("line-through");

        if (answerArray[2][2].crosscheck() === $("#D3").val().crosscheck() &&
            answerArray[3][2].crosscheck() === $("#D4").val().crosscheck()) /*birds and Pall Mall*/
            $("#clue-6").addClass("line-through");

        if (answerArray[2][0].crosscheck() === $("#B3").val().crosscheck()) /*cats*/
            $("#clue-10").addClass("line-through");

        if (answerArray[0][4].crosscheck() === $("#F1").val().crosscheck() &&
            answerArray[2][4].crosscheck() === $("#F3").val().crosscheck()) /*Swede and dogs*/
            $("#clue-2").addClass("line-through");
    }

    function nationalitiesFlags() { // Changes background of nationalities inputs when correct value is entered

        if (answerArray[0][0].crosscheck() === $("#B1").val().crosscheck()) // Norwegian Flag Background
            $("#B1").addClass("norwegian");

        if (answerArray[0][1].crosscheck() === $("#C1").val().crosscheck()) // Danish Flag Background
            $("#C1").addClass("dane");

        if (answerArray[0][2].crosscheck() === $("#D1").val().crosscheck()) // British Flag Background
            $("#D1").addClass("brit");

        if (answerArray[0][3].crosscheck() === $("#E1").val().crosscheck()) // German Flag Background
            $("#E1").addClass("german");

        if (answerArray[0][4].crosscheck() === $("#F1").val().crosscheck()) // Swedish Flag Background
            $("#F1").addClass("swede");
    }

    function houseColour() { // Changes house icon colour and initates animation when the corresponding correct answer is entered

        if (answerArray[1][0].crosscheck() === $("#B2").val().crosscheck())
            $("#house-1").addClass("yellow-house house-transform");

        if (answerArray[1][1].crosscheck() === $("#C2").val().crosscheck())
            $("#house-2").addClass("blue-house house-transform");

        if (answerArray[1][2].crosscheck() === $("#D2").val().crosscheck())
            $("#house-3").addClass("red-house house-transform");

        if (answerArray[1][3].crosscheck() === $("#E2").val().crosscheck())
            $("#house-4").addClass("green-house house-transform");

        if (answerArray[1][4].crosscheck() === $("#F2").val().crosscheck())
            $("#house-5").addClass("white-house house-transform");
    }

    function houseInput() { // When correct answer is entered the input border and/or background changes colour to highlight corresponding colour

        if (answerArray[1][0].crosscheck() === $("#B2").val().crosscheck())
            $("#B2").addClass("yellow-input");

        if (answerArray[1][1].crosscheck() === $("#C2").val().crosscheck())
            $("#C2").addClass("blue-input");

        if (answerArray[1][2].crosscheck() === $("#D2").val().crosscheck())
            $("#D2").addClass("red-input");

        if (answerArray[1][3].crosscheck() === $("#E2").val().crosscheck())
            $("#E2").addClass("green-input");

        if (answerArray[1][4].crosscheck() === $("#F2").val().crosscheck())
            $("#F2").addClass("white-input");
    }

    function smokingAnswer() { // When correct answer is entered smoking gif is shown in the background

        if (answerArray[3][0].crosscheck() === $("#B4").val().crosscheck())
            $("#B4").addClass("smoking-answer");

        if (answerArray[3][1].crosscheck() === $("#C4").val().crosscheck())
            $("#C4").addClass("smoking-answer");

        if (answerArray[3][2].crosscheck() === $("#D4").val().crosscheck())
            $("#D4").addClass("smoking-answer");

        if (answerArray[3][3].crosscheck() === $("#E4").val().crosscheck())
            $("#E4").addClass("smoking-answer");

        if (answerArray[3][4].crosscheck() === $("#F4").val().crosscheck())
            $("#F4").addClass("smoking-answer");
    }

    function drinksAnswer() { // When correct answer is inputted the background image changes to a picture of the corresponding answer

        if (answerArray[4][0].crosscheck() === $("#B5").val().crosscheck()) // Water Glasses Background
            $("#B5").addClass("water");

        if (answerArray[4][1].crosscheck() === $("#C5").val().crosscheck()) // Tea Cups Background
            $("#C5").addClass("tea");

        if (answerArray[4][2].crosscheck() === $("#D5").val().crosscheck()) // Glasses of Milk Background
            $("#D5").addClass("milk");

        if (answerArray[4][3].crosscheck() === $("#E5").val().crosscheck()) // Coffee Cups Background
            $("#E5").addClass("coffee");

        if (answerArray[4][4].crosscheck() === $("#F5").val().crosscheck()) // Beer Bottles Background
            $("#F5").addClass("beer");
    }

/*-------------------------Game Breaking Protection*/

    const incorrectAnswerCount = { lastAnswer: "", count: 0 }

    function breakingProtection(currentAnswer) {
        if (incorrectAnswerCount.lastAnswer === currentAnswer)
            incorrectAnswerCount.count++;
        else {
            incorrectAnswerCount.count = 0;
        }

        if (incorrectAnswerCount.count >= 3)
            return true;
        else {
            incorrectAnswerCount.lastAnswer = currentAnswer
            return false;
        }
    }

 /*-------------------------Einstein Picture Rotation*/

    let index = 0;

    function rotate() {
        const einsteinRotation = [
            "with-hand-2.jpg", "with-hand-3.jpg", "with-hand-4.jpg",
            "right-1.jpg", "right-2.jpg", "right-3.jpg",
            "left-1.jpg", "left-2.jpg", "left-3.jpg",
            "right-1.jpg", "right-2.jpg", "right-3.jpg", "right-4.jpg",
            "with-hand-2.jpg", "with-hand-3.jpg", "with-hand-4.jpg"
        ];

        index++
        if (index == einsteinRotation.length) {
            index = 0;
        }

        let image = "assets/images/einstein-animation/" + einsteinRotation[index];

        if (correctAnswer) {
            image = "assets/images/einstein-animation/wink.jpg";
            correctAnswer = false;
        }

        if (incorrectAnswer) {
            image = "assets/images/einstein-animation/wrong-pic.jpg";
            incorrectAnswer = false;
        }

        document.getElementById("einstein-pic").src = image;
    }

    let picRotationInterval = setInterval(rotate, 800);

}); /* Closing Curly Bracket*/