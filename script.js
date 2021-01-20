var questions = 0;
var score = 0;
var data = 0;
var currentTime = document.querySelector("#start");
var timer = document.querySelector("#currentTime");
var seconds = 61;
var done = 0;


currentTime.addEventListener("click", function () {
    //alert("WORK PLEASE");
    if (done === 0) {
        holdInterval = setInterval(function () {
            seconds--;
            timer.textContent = "Time: " + seconds;

            if (seconds <= 0) {
                clearInterval(done);
                timer.textContent = "GAME OVER";
            }
        }, 1000);
    }
});
