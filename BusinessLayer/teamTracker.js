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


// API code below

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        parsedResponse = JSON.parse(xhttp.responseText)
    }
};
xhttp.open("GET", "https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=Arsenal", true);
xhttp.send();

// template --

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//    if (this.readyState == 4 && this.status == 200) {
//        // Typical action to be performed when the document is ready:
//        parsedResponse = JSON.parse(xhttp.responseText)
//    }
// };
// xhttp.open("GET", "https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=Arsenal", true);
// xhttp.send();
