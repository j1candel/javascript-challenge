// Selecting data from from data.js
let tableData = data;

// Making an array with all the names of the fields 
let tableFields= ["datetime", "city","ar","country","shape","durationMinutes","comments"]

// Obtaining the HTML reference 
let tBody = d3.select("tbody");
let dateTime = d3.select("#datetime")
let btnSearch = d3.select("#filter-btn")

// Building the html table 
let loadTableRows = (data) => { 
    
    // Erasing all previous rows 
    tBody.html("");
    
    // adding all "data" to the table 
	data.forEach(allRowData => { 
        
        // Adding a table row
		let tableRow = tBody.append("tr");  
        
        // Adding values in the table row
		tableFields.forEach(field => tableRow.append("td").text(allRowData[field]))
	});
}

// Display the html table with all the rows
loadTableRows(tableData);

// Creating the search button and adding filter
btnSearch.on("click", () => {

    // Create event handler
    d3.event.preventDefault();

    // Give the input value a variable 
    let searchDateTime = dateTime.property("value");

    // Filter the table data to only return data equal to the input variable 
    let filterTableDate = tableData.filter(tableData => tableData.datetime === searchDateTime);

    // If the length of filterTableDate is longer than one row then the loadTableRows function begins
    if(filterTableDate.length !== 0 ){
        loadTableRows(filterTableDate)
    }

    // If the lenth of filterTableDate is equal 0 then they delete the table and display the text 
    else{
        tBody.html("")

        tBody.append("tr").append("td").text("Unfortunately, there were no sightings on that date")
    }
})
