var quiz = [
    {
        question: "Which of the following is not JavaScript Data Types?",
        choices: ["Undefined", "Number", "Boolean", "Float"],
        correct: "Float"
    },

    {
        question: "Which company developed JavaScript?",
        choices: ["Netscape", "Bell Labs", "Sun Microsystems", "IBM"],
        correct: "Netscape"
    },

    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<head>", "<meta>", "<style>"],
        correct: "<script>"
    },

    {
        question: "What is the original name of JavaScript?",
        choices: ["LiveScript", "EScript", "Mocha", "JavaScrip"],
        correct: "Mocha"
    },

    {
        question: "Which of them is not the looping structures in JavaScript?",
        choices: ["for", "while", "forwhich", "dowhile"],
        correct: "forwhich"
    },

    {
        question: "What are the types of Pop up boxes available in JavaScript?",
        choices: ["Alert", "Prompt", "Confirm", "All the Above"],
        correct: "All the Above"
    },

    {
        question: "Javascript string using double quotes is exactly the same as a string using single quotes?",
        choices: ["Never", "Always", "Sometimes", "Rarely"],
        correct: "Always"
    }
];


var questionsAsked = 0;
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
