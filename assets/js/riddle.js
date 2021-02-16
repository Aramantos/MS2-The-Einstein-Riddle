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

    $(".answers").on("change", function () {

        if ($(this).val().crosscheck() !== riddleAnswers[this.id].crosscheck()) { // Clears input field if wrong answer value is inputted
            $(this).val("");
        }

        if ($(this).val().crosscheck() === riddleAnswers[this.id].crosscheck()) {
            $(this).prop("disabled", true).css("background-color", "white"); // Disables input if correct answer is entered
        }
            
        riddleCorrect(); // Checks all answers are correct, then changes picture to einstein-victory.gif
        clueCorrect(); // Crosses out clue when corresponding answers are in the correct value fields
        nationalitiesFlags(); // Changes background of nationalities row inputs when correct value is entered
        houseInput(); // When correct answer is entered the input border and/or background changes colour to highlight corresponding colour
        smokingAnswer(); // When correct answer is entered smoking gif is shown in the background

    });

    function riddleCorrect() { // Checks all answers are correct, then changes picture to einstein-victory.gif

        let result = false;

        $(".answers").each(function () {
            result = $(this).val().crosscheck() === riddleAnswers[this.id].crosscheck() ? true : false;
            return result;
        });
        if (result == true) {

            { $("#einstein-pic").attr("src", "assets/images/einstein-victory.gif") };
            /* --- CREDIT: Image: https://wifflegif.com/gifs/662977-albert-einstein-insanity-gif --- */
        }
        return result;
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

}); /* Closing Curly Bracket*/