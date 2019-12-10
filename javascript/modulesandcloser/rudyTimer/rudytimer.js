
var timer = null;

var rudy = (function () {


    function delayMsg2() {

        if (timer === null) {
            timer = setInterval(rudy, 1000);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }

    function rudy() { // called each time the timer goes off
        document.getElementById("output").innerHTML += "Rudy!";
    }
    return {
        delaytimer: delayMsg2 ()
    };
})

function rudyTimer() {

    var rt = rudy();
    rt.delaytimer;
}
