// Functions for the nav bar start here 
function openDrawer() {
    document.getElementById("myDrawer").style.width = "250px";
}

function closeDrawer() {
    document.getElementById("myDrawer").style.width = "0";
}

// slides the nav bar out and in instead of popping it up by using the nav-fade-in CSS styling
document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("nav-fade-in");
});

//   API code using xhttp request to get data from www.thesportsdb.com 
document.addEventListener("DOMContentLoaded", function() {

    // new instance of xhttp request
    var xhttp = new XMLHttpRequest();  
    
    xhttp.onreadystatechange = function()  { // when the xhttp is ready execute function
        if (this.readyState == 4 && this.status == 200) {
            const parsedResponse = JSON.parse(xhttp.responseText); // parses xhttp file to parsedResponce in JSON format
            const events = parsedResponse.results; // sets parsed responce to var events 

            // accesses html element events from teamTracker.html by setting eventsContainer variable to events div
            const eventsContainer = document.getElementById("events"); 

            // Create HTML elements for each event and append them to the container
            events.forEach(function(event, index) { // for each event in the index...
                if (index < 5) { // show only the last five events
                    
                    // creates and adds a div to the teamTracker html page named eventDetails
                    var eventDiv = document.createElement("div"); 
                    eventDiv.classList.add("event");

                    // constructs event details with the badges, date and a hyperlink if a video is available
                    var eventDetails = "<div>";
                    
                    // checks if a video is avialble, if not then sets hyperlink to _blank (unclickable)
                    // if video available, wraps text and badges in a hyperlink to the video on youtube.com 
                    if (event.strVideo !== null && event.strVideo !== "") {
                        eventDetails += "<a href='" + event.strVideo + "' target=_blank'>";
                    }
                    // adds badges of home and away team, date of match and scores to eventDetails div. 
                    // uses Strong styling technique because I only want the scores to be in bold
                    eventDetails += "<img src='" + event.strHomeTeamBadge + "' alt='" + event.strHomeTeam + "'> " +
                       "<strong>" + event.intHomeScore + "</strong>" + " | " +
                        event.dateEvent + " | " +
                        "<strong>" + event.intAwayScore + "</strong>" + " " +
                        "<img src='" + event.strAwayTeamBadge + "' alt='" + event.strAwayTeam + "'>";
                    
                    // if a video is available add a hyperlink over text
                    if (event.strVideo !== null && event.strVideo !== "") {
                        eventDetails += "</a>";
                    }
                    
                    // adds closing div to eventDetails
                    eventDetails += "</div>";

                    // appends everyting in eventDetails to eventDiv
                    eventDiv.innerHTML = eventDetails;

                    // then appends eventDiv to eventsContainer
                    eventsContainer.appendChild(eventDiv);
                }
            });
        }
    };
    // API call
    xhttp.open("GET", "https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=133647", true);
    xhttp.send();
});

                                    // for teams within the SPL - similar code as previous call

document.addEventListener("DOMContentLoaded", function() {

    // new instance of xhttp request
    const xhttpTeams = new XMLHttpRequest();

    xhttpTeams.onreadystatechange = function() { // when the xhttp is ready execute function
        if (this.readyState == 4 && this.status == 200) {
            const parsedResponse = JSON.parse(xhttpTeams.responseText); // parses xhttp file to parsedResponce in JSON format
            const teams = parsedResponse.teams; // sets parsed responce to var teams 

            // accesses html element teams from teamTracker.html by setting teamsContainer variable to teams div
            const teamsContainer = document.getElementById("teams");

            // Create HTML elements for each team and append them to the container
            teams.forEach(function(team, index) { // for each team in the index...
                if (index < 12) { // show only the first five teams

                    // creates and adds a div to the teamTracker html page named teamDetails
                    var teamDiv = document.createElement("div");
                    teamDiv.classList.add("team");

                    // constructs team details with the team name and badge
                    var teamDetails = "<div>";

                    // adds team name and badge to teamDetails div
                    teamDetails += "<img src='" + team.strTeamBadge + "' alt='" + team.strTeam + "'> " +
                        team.strTeam;

                    // adds closing div to teamDetails
                    teamDetails += "</div>";

                    // appends everyting in teamDetails to teamDiv
                    teamDiv.innerHTML = teamDetails;

                    // then appends teamDiv to teamsContainer
                    teamsContainer.appendChild(teamDiv);
                }
            });
        }
    };
    // API call
    xhttpTeams.open("GET", "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Scottish%20Premier%20League", true);
    xhttpTeams.send();
});