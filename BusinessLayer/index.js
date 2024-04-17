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


                                        // NEEDS FIXED


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
    slideshowTimer = setInterval(function () {
        plusSlides(1); // Move to the next slide
    }, 2000); // Change slide every 2 seconds (2000 milliseconds)
}

function stopSlideshow() {
    clearInterval(slideshowTimer); // Clear the timer to stop the slideshow
}

// Start the slideshow automatically when the page loads
startSlideshow();

// Pause the slideshow when the user interacts with the slideshow controls
document.querySelectorAll('.prev, .next, .dot').forEach(function (elem) {
    elem.addEventListener('click', function () {
        stopSlideshow();
    });
});

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

