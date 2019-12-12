var isEnter = false;
$(document).ready(function () {

    $("#start").click(function () {
        $(".boundary").css("background-color", "#eeeeee");
        $("#status").text("Move the mouse without touching boundary");
        isEnter = true;
    });

    $(".boundary").mouseenter(function () {
        if (isEnter == true) {
            $("#status").text("You Lose !");
            $(".boundary").css("background-color", "red");
            isEnter = false;
        }
    });

    $("#end").mouseenter(function () {
        if (isEnter == true) {
            $("#status").text("You Win!:]");
            isEnter = false;
        }
    });


});