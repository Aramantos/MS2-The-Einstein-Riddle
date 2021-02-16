String.prototype.crosscheck = function () {
    return this.toUpperCase().trim();
};

$(document).ready(function () {

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
            
        riddleCorrect();

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

}); /* Closing Curly Bracket*/