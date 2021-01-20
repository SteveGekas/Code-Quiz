
var start = document.querySelector("#start");
var currentTime = document.querySelector("#currentTime");
var quiz = document.querySelector("#quiz")
var seconds = 61;
var done = 0;


start.addEventListener("click", function () {
    //alert("WORK PLEASE");
    if (done === 0) {
        holdInterval = setInterval(function () {
            seconds--;
            currentTime.textContent = "Time: " + seconds;

            if (seconds <= 0) {
                clearInterval(done);
                currentTime.textContent = "GAME OVER";
            }
        }, 1000);
    }
});

var quizQuestions = [
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

function render(questionsAsked) {
    quiz.innerHTML = "";
    ul.innerHTML = "";

    for (var i = 0; i < quizQuestions.length; i++) {
        var UseQuestion = quizQuestions[questionsAsked].question;
        var UseChoice = quizQuestions[questionsAsked].choices;
        quiz.textContent = UseQuestion;
    }

    UseChoice.forEach(function (next) {
        var item = document.createElement("li");
        item.textContent = next;
        quiz.appendChild(ul);
        ul.appendChild(next);
        item.addEventListener("click", (check));
    })

}

function check(event) {
    var UseAnswers = event.target;
    
    if (UseAnswers.matches("li")) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", newDiv)

        if (UseAnswers.textContent === quizQuestions[questionsAsked].correct) {
            score++;
            newDiv.textContent = "CORRECT!";
        }
        else {
            seconds = seconds - 10;
            newDiv.textContent = "INCORRECT, the answer is " + quizQuestions[questionsAsked].correct;
        }
    }
    questionsAsked++;


}
