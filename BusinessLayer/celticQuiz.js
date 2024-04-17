
// functions to open drawer and close drawer (nav bar) 
function openDrawer() {
    document.getElementById("myDrawer").style.width = "250px";
}

function closeDrawer() {
    document.getElementById("myDrawer").style.width = "0";
}

// slides the nav bar out and in instead of popping it up by using the nav-fade-in CSS styling
document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('nav-fade-in');
});

// a function to fetch the data from the quiz.JSON file
document.addEventListener("DOMContentLoaded", function () {
    // initialises a const data type and sets it to the quizContainer div by using its id
    const quizContainer = document.getElementById("quizContainer");

    // uses fetch function to grab data from JSON
    fetch("BusinessLayer/quiz.json")
        .then(response => response.json())
        .then(data => {
            // pushes and stores the questions in questionData
            questionsData.push(...data.questions);
            // uses the displayQuestion() function to display the question
            displayQuestion();
        })
        // gives a console log error if the there are any errors loading the quiz
        .catch(error => console.error('Error loading quiz:', error));
});

// initialise variables to keep the total score, keep the currentQuestionIndex and an array to hold the questions data 
let totalScore = 0;
let currentQuestionIndex = 0;
const questionsData = [];

// function to display the current question
// uses the template strings approach to create the radio buttons, and other general elements
function displayQuestion() {
    // initialises two const data types. sets currentQuestionData to the data in the currentQuestionIndex and creates a div called questionDiv
    const currentQuestionData = questionsData[currentQuestionIndex];
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    // uses template strings and the innerHTML property to display different elements throughout the questionDiv div
    // h2 displays the current question number using the currentQuestionIndex, incrementing the question each time
    // .options.map((option, index) iterates though each part in the options part of the JSON file using the map method 
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
    // setts the quizContainer to an empty string and appends it to questionDiv (effectively clearing the div)
    quizContainer.innerHTML = "";
    quizContainer.appendChild(questionDiv);
}

// function to submit the user's answer
function submitAnswer() {
    // initialises another two const data types. sets one to the question data and the other as the users option
    const currentQuestionData = questionsData[currentQuestionIndex];
    const selectedOptionIndex = document.querySelector('input[name="answer"]:checked').value;

    // checks if the users answer = to the answer, if so, increments totalScore by 1
    if (currentQuestionData.options[selectedOptionIndex] === currentQuestionData.answer) {
        totalScore++;
    }

    // moves onto the next question or shows total score if the user has reached the end of the quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < questionsData.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

// function to display the user's score
function displayScore() {
    // initialises another new const data type variable and cresates a div element
    const scoreDiv = document.createElement("div");
    // once again uses string templates and the innerHTML method to present the score and the total answers correct
    scoreDiv.innerHTML = `
        <h2>Your Score</h2>
        <p>Total correct answers: ${totalScore} out of ${questionsData.length}</p>
    `;
    // clears the previous content (previous quiz div)
    quizContainer.innerHTML = "";
    // appends the quizContainer to the scoreDiv (basically a div that uses string templates to show the users final score and how many questions they got right)
    quizContainer.appendChild(scoreDiv);
}

