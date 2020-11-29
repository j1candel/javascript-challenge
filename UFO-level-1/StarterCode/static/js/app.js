// Selecting data from from data.js
let sightings = data;

//Selecting the dateTime 
let dateTime = d3.select("#datetime")

//Create an event handler
dateTime.on("submit", runEnter);


// Completing the event handler form
function runEnter() {
    
    //Prevent the page from refreshing 
    d3.event.preventDefault()
}
