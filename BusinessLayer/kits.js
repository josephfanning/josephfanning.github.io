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


// Fetch JSON data from the file
// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // fetches data from the JSON file
    fetch("BusinessLayer/kits.json")
        
        .then(response => response.json())
        // processes fetched data 
        .then(data => {
            // get kits array from fetched data 
            var kits = data.kits;
            // gets the imageContainer
            var imageContainer = document.getElementById("imageContainer");

            // loops and processes three kits at a time 
            for (var i = 0; i < kits.length; i += 3) {
                // Create a container div for each set of three kits
                var kitSetDiv = document.createElement("div");
                kitSetDiv.classList.add("kit-set");

                // loops to process each kit in the current set of three
                for (var j = i; j < i + 3 && j < kits.length; j++) {
                    // gets the current kit
                    var kit = kits[j];
                    // create a div for individual kit
                    var kitDiv = document.createElement("div");
                    kitDiv.classList.add("kit");

                    // create image tag from the image location
                    var img = document.createElement("img");
                    // adds image kit and alt to the image tag 
                    img.src = kit.image;
                    img.alt = kit.description;

                    // create a paragraph (p) tag for the kit description
                    var description = document.createElement("p");
                    description.textContent = kit.description;

                    // creates a div element for the kit year
                    var year = document.createElement("div");
                    year.classList.add('year');
                    year.textContent = kit.year || ''; // Display year if available

                    // appends kit year, kit images and kit description to the kitDiv
                    kitDiv.appendChild(year); // Append year
                    kitDiv.appendChild(img);
                    kitDiv.appendChild(description);

                    // append the kit div to the set of three kits
                    kitSetDiv.appendChild(kitDiv);
                }

                // append the set of three kits to the image container
                imageContainer.appendChild(kitSetDiv);
            }
        })
        // sends a console error if theres any issues with getting the data
        .catch(error => console.error("Error fetching kit data:", error));
});



