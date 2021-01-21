
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
        newDiv.setAttribute("id", "newDiv");

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

    if (questionsAsked >= quizQuestions.length) {
        newDiv.textContent = "Score: " + score;
    }
    else {
        render(questionsAsked);
    }

    quiz.appendChild(newDiv);

    var paragraph = document.createElement("p");
    paragraph.setAttribute("id", "paragraph");
    quiz.appendChild.apply(paragraph);

    if (seconds >= 0) {
        var timeLeft = seconds;
        clearInterval(holdInterval);
        if (timeLeft === undefined) {
            timeLeft = 0;
        }
    }

    var label = document.createElement("label");
    label.setAttribute("id", "label");
    label.textContent = "Enter your initials ";
    quiz.appendChild(label);

    var initials = document.createElement("initials");
    initials.setAttribute("type", "text");
    initials.setAttribute("id", "initials");
    initials.textContent = "";
    quiz.appendChild(initials);

    var subInit = document.createElement("button");
    subInit.setAttribute("type", "Submit");
    subInit.setAttribute("id", "Submit");
    subInit.textContent = "Submit";
    quiz.appendChild(subInit);

    subInit.addEventListener("click", function () {
        var inits = initials.value;
        var finScore = {
            initials: inits,
            score: timeLeft
        }

        var highScore = localStorage.getItem("highScore");

        if (highScore === null) {
            highScore = []
        }
        else {
            highScore = JSON.parse(highScore);
        }

        if (finScore.score === undefined) {
            finScore.score = 0;
        }
        highScore.push(finScore);
        var topScore = JSON.stringify(finScore);
        localStorage.setItem("highScore", topScore);
        window.location.replace("highScores.html")
    });

}
