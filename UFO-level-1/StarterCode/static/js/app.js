// Selecting data from from data.js
let tableData = data;


let tableFields= ["datetime", "city","ar","country","shape","durationMinutes","comments"]

let tBody = d3.select("tbdoy");
let datetime = d3.select("#datetime")
let btnSearch = d3.select("#filter-btn")


let newTableRows = (filterData) => {

    tbody= ""
}
/*//Selecting the button 
let button = d3.select("#button");

//Selecting the dateTime 
let form = d3.select("#form");

//Create an event handler
button.on("click", runEnter);
button.on("submit", runEnter);

// Completing the event handler form
function runEnter() {
    
    //Prevent the page from refreshing 
    d3.event.preventDefault()

    let inputElement = d3.select("#datetime")

    let inputValue = inputElement.property("value")

    console.log(inputValue)
    console.log(sightings)
}*/
