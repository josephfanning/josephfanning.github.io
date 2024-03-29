// LOCATION OF SCRIPTS:
// • nav bar - line 6
// • earlyHistory.html - line 20
// • CelticQuiz.html - line 57
// • clubTimeline.html - line 229

// Functions for the nav bar start here 
function openDrawer() { 
    document.getElementById("myDrawer").style.width = "250px";
  }

function closeDrawer() {
    document.getElementById("myDrawer").style.width = "0";
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('nav-fade-in');
  });

// Functions for the earlyHistory.html page starts here 
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
//
// function fadeInText(id) {
// var textContaainer = document.getElementById(id);
//  textContainer.classList.add('fade-in');
//}
//

// code for the quiz shown on celticQuiz.html starts here 

// Initialize the current question index
let currentQuestionIndex = 0;

// Initialize the total score
let totalScore = 0;



// Array of questions the quiz will contain
document.addEventListener("DOMContentLoaded", function() {
    const quizContainer = document.getElementById('quizContainer');

    // Fetch the quiz data from the JSON file
    fetch('BusinessLayer/quiz.json')
        .then(response => response.json())
        .then(data => {
            // Display the quiz name
            const quizName = document.createElement('h1');
            quizName.textContent = data.name;
            quizContainer.appendChild(quizName);

            // Iterate over each question in the quiz data
            data.questions.forEach((questionData, index) => {
                // Create a div element for each question
                const questionDiv = document.createElement('div');
                questionDiv.classList.add('question');
                questionDiv.innerHTML = `
          <h2>Question ${index + 1}</h2>
          <p>${questionData.text}</p>
          <ul>
            ${questionData.options.map(option => `<li>${option}</li>`).join('')}
          </ul>
        `;

                // Append the question div to the quiz container
                quizContainer.appendChild(questionDiv);
            });
        })
        .catch(error => console.error('Error loading quiz:', error));
});