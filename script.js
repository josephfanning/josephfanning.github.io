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
const questions = [{
  question: "When was Celtic FC founded?",
  answers: [
    { text: "1888", value: 1 },
    { text: "1988", value: 0 },
    { text: "1887", value: 0 },
    { text: "1872", value: 0 }
  ]
}, 
{
  question: "What was the founders profession at the time of foudning Celtic FC?",
  answers: [
    { text: "A shoemaker", value: 0 },
    { text: "A bricklayer", value: 0 },
    { text: "A priest", value: 1 },
    { text: "A baker", value: 0 }
  ]
},
{
  question: "What age was Willie Maley when he was appointed as manager in 1897?",
  answers: [
    { text: "31", value: 0 },
    { text: "29", value: 1 },
    { text: "28", value: 0 },
    { text: "26", value: 0 }
  ]
},
{
  question: "In what year did Celtic win their first scottish cup title?",
  answers: [
    { text: "1894", value: 0 },
    { text: "1990", value: 0 },
    { text: "1911", value: 0 },
    { text: "1891", value: 1 }
  ]
},
{
  question: "When did Celtic win the European Cup title?",
  answers: [
    { text: "1977", value: 0 },
    { text: "1975", value: 0 },
    { text: "1970", value: 0 },
    { text: "1967", value: 1 }
  ]
},
{
  question: "In what country was Celtic's first erupoean title cup played in? ",
  answers: [
    { text: "Spain", value: 0 },
    { text: "France", value: 0 },
    { text: "Portugal", value: 1 },
    { text: "Germany", value: 0 }
  ]
},
{
  question: "What's the name of Celtic's mascot? before 2010?",
  answers: [
    { text: "Hoopy", value: 0 },
    { text: "Freddie", value: 0 },
    { text: "Buggsy", value: 0 },
    { text: "Hailey", value: 1 }
  ]
},
{
  question: "Celtic hold the record for the longest unbeaten run in UK domestic professional football. How many games did it last?",
  answers: [
    { text: "69", value: 1 },
    { text: "49", value: 0 },
    { text: "102", value: 0 },
    { text: "104", value: 0 }
  ]
},
{
  question: "Henrik Larsson played 221 times for Celtic between 1997 and 2004, how many goals did he score?",
  answers: [
    { text: "81", value: 0 },
    { text: "221", value: 0 },
    { text: "151", value: 0 },
    { text: "175", value: 1 }
  ]
},
{
  question: "Which of these is not a Celtic FC nickname?",
  answers: [
    { text: "The Bhoys", value: 0 },
    { text: "The Hoops", value: 0 },
    { text: "The Tics", value: 1 },
    { text: "The Celts", value: 0 }
  ]
},];

// Add the value of the selected answer to the total score and uncheck the other radio buttons
function updateScore(selectedAnswer) {
  // Check if a radio button has been selected
  if (!selectedAnswer.checked) {
    return;
  }

  // Add the value of the selected answer to the total score
  totalScore += parseInt(selectedAnswer.value);

  // Get all the radio buttons
  const radioButtons = document.getElementsByName("answer");
  // Loop through the radio buttons
  for (const radioButton of radioButtons) {
    // If the radio button is not the selected answer, uncheck it
    if (radioButton !== selectedAnswer) {
      radioButton.checked = false;
    }
  }
}

// Show the next question
function showNextQuestion() {

  // Hide the form
  document.getElementById("form").style.display = "none";

  // Show the question and answers
  document.getElementById("question").style.display = "block";
  document.getElementById("answers").style.display = "block";
  document.getElementById("next-button").style.display = "block";

  // Check if the current question is the last question
  if(currentQuestionIndex < questions.length){
    // If it is not, get the current question
    const currentQuestion = questions[currentQuestionIndex];

    // Update the question text
    document.getElementById("question").innerHTML = currentQuestion.question;
    //clear answers
    document.getElementById("answers").innerHTML = '';
    // Show the answers for the current question
    for (const answer of currentQuestion.answers) {
      document.getElementById("answers").innerHTML += `
        <input type="radio" name="answer" value="${answer.value}" onchange="updateScore(this)"> ${answer.text}<br>
      `;
    }

    // Update the current question index
    currentQuestionIndex++;
  }
  if (currentQuestionIndex === questions.length) {
      // If it is, hide the "Next" button and show the "Submit" button
      document.getElementById("next-button").style.display = "none";
      document.getElementById("submit-button").style.display = "block";
  }
}

// Show the total score
function showTotalScore() {

  // Hide the question and answers
  document.getElementById("question").style.display = "none";
  document.getElementById("answers").style.display = "none";
  document.getElementById("submit-button").style.display = "none";

  // Show the total score
  document.getElementById("total-score").style.display = "block";
  document.getElementById("total-score").innerHTML = " Your total score is: " + totalScore + "/10";
}

// functions and code for clubTimeline.html start here

