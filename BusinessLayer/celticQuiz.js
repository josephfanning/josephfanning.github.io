
// Functions for the nav bar  
function openDrawer() {
    document.getElementById("myDrawer").style.width = "250px";
}

function closeDrawer() {
    document.getElementById("myDrawer").style.width = "0";
}

document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('nav-fade-in');
});


// holds the score of the user
let totalScore = 0;
// holds the number of the question the user is on 
let currentQuestionIndex = 0;
// Array to store quiz questions data
const questionsData = [];

// function to display the current question
// uses the template strings approach to create the radio buttons, and other general elements
function displayQuestion() {
    // initialises two constants and sets them to different 
    const currentQuestionData = questionsData[currentQuestionIndex];
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    // uses template strings to display different elements throughout the questionDiv div
    questionDiv.innerHTML = `
        <h2>Question ${currentQuestionIndex + 1}</h2>
        <p>${currentQuestionData.text}</p>
        <form id="questionForm">
            ${currentQuestionData.options.map((option, index) => `
                <input type="radio" id="option${index}" name="answer" value="${index}">
                <label for="option${index}">${option}</label><br>
            `).join('')}
            <button type="button" onclick="submitAnswer()">Submit Answer</button>
        </form>
    `;
    // clears previous question
    quizContainer.innerHTML = "";
    quizContainer.appendChild(questionDiv);
}

// function to submit the user's answer
function submitAnswer() {
    // initialises another two const data types. sets one to the question data and the other as the users option
    const currentQuestionData = questionsData[currentQuestionIndex];
    const selectedOptionIndex = document.querySelector('input[name="answer"]:checked').value;

    if (currentQuestionData.options[selectedOptionIndex] === currentQuestionData.answer) {
        // adds the score if the users input is equal to the answer, then total score is incremented by 1
        totalScore++;
    }

    // moves to the next question or shows total score if the user has reached the end of the quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsData.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

// function to display the user's score
function displayScore() {
    // initialises another new const data type variable 
    const scoreDiv = document.createElement("div");
    // once again uses string templates to present the score and the total answers correct
    scoreDiv.innerHTML = `
        <h2>Your Score</h2>
        <p>Total correct answers: ${totalScore} out of ${questionsData.length}</p>
    `;
    // clears the previous content (previous quiz)
    quizContainer.innerHTML = "";
    // shows the scoreDiv (basically a div that uses string templates to show the users final score and how many questions they got right)
    quizContainer.appendChild(scoreDiv);
}

// fetches the data from the quiz file
document.addEventListener("DOMContentLoaded", function () {
    // initialises a const data type and sets it to the quizContainer div by using its id
    const quizContainer = document.getElementById("quizContainer");

    fetch("BusinessLayer/quiz.json")
        .then(response => response.json())
        .then(data => {
            // stores the questions in questionData
            questionsData.push(...data.questions);
            // uses the displayQuestion() function to display the question
            displayQuestion();
        })
        // gives a console log error if the there are any errors loading the quiz
        .catch(error => console.error('Error loading quiz:', error));
});