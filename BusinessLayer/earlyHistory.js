// Functions for the nav bar start here 
function openDrawer() {
    document.getElementById("myDrawer").style.width = "250px";
}

function closeDrawer() {
    document.getElementById("myDrawer").style.width = "0";
}
// slides the nav bar out and in instead of popping it up 
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
