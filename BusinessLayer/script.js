// LOCATION OF SCRIPTS:
// • nav bar - line 7
// • earlyHistory.html - line 20
// • CelticQuiz.html - line 56


// Functions for the nav bar start here 
function openDrawer() {
    document.getElementById("myDrawer").style.width = "250px";
}

function closeDrawer() {
    document.getElementById("myDrawer").style.width = "0";
}

document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('nav-fade-in');
});

// Functions for the earlyHistory.html page starts here 
// five simple functions to get text to fade into existence. uses element id's to get the text
// had trouble trying to make one singular function 
function fadeInText(textContainer1) {
    var textContainer1 = document.getElementById('textContainer1');
    textContainer1.classList.add('fade-in');

}

function fadeInText2(textContainer2) {
    var textContainer2 = document.getElementById('textContainer2');
    textContainer2.classList.add('fade-in');
}

function fadeInText3(textContainer3) {
    var textContainer3 = document.getElementById('textContainer3');
    textContainer3.classList.add('fade-in');
}

function fadeInText4(textContainer4) {
    var textContainer4 = document.getElementById('textContainer4');
    textContainer4.classList.add('fade-in');
}

function fadeInText5(textContainer5) {
    var textContainer5 = document.getElementById('textContainer5');
    textContainer5.classList.add('fade-in');
}

// function for one singular fade in text - cant currently get it working 

// function fadeInText(textContainer) {
// var textContainer = document.getElementById('textContainer');
// textContainer.classList.add('fade-in');
//}
//


// code for the quiz shown on celticQuiz.html starts here 

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



                // code for index.html slideshow starts here 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Automatic slideshow
let slideshowTimer; // Variable to hold the timer

function startSlideshow() {
    slideshowTimer = setInterval(function() {
        plusSlides(1); // Move to the next slide
    }, 2000); // Change slide every 2 seconds (2000 milliseconds)
}

function stopSlideshow() {
    clearInterval(slideshowTimer); // Clear the timer to stop the slideshow
}

// Start the slideshow automatically when the page loads
startSlideshow();

// Pause the slideshow when the user interacts with the slideshow controls
document.querySelectorAll('.prev, .next, .dot').forEach(function(elem) {
    elem.addEventListener('click', function() {
        stopSlideshow();
    });
});

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}




                            // Screwed up API code below (ask in labs for help)


document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = "https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=Scotland&s=Soccer";

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            // Update the DOM with the fetched data
            displayLeagueInfo(data);
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
        });

    // Function to display league info in the DOM
    function displayLeagueInfo(data) {
        const leagueData = data.leagues; // Assuming the data structure contains an array of leagues

        // Select the element where you want to display the data
        const dataContainer = document.getElementById('data');

        // Create HTML elements to display the league info
        const heading = document.createElement('h3');
        heading.textContent = "Football Leagues in Scotland";

        const list = document.createElement('ul');
        leagueData.forEach(league => {
            const listItem = document.createElement('li');
            listItem.textContent = league.strLeague; // Assuming league object has a property for league name
            list.appendChild(listItem);
        });

        // Append the elements to the data container
        dataContainer.appendChild(heading);
        dataContainer.appendChild(list);
    }
});


