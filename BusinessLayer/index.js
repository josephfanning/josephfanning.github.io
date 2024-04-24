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
