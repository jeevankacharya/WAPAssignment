var isEnter = false;
$(document).ready(function () {

    $("#start").click(function () {
        $(".boundary").removeClass("youlose");
        $("#status").text("Move the mouse without touching boundary");
        isEnter = true;
    });

    $(".boundary").mouseenter(function () {
        if (isEnter == true) {
            $("#status").text("You Lose !");
            $(".boundary").addClass("youlose");
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