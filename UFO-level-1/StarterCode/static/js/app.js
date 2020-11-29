// Selecting data from from data.js
let tableData = data;

// Making an array with all the names of the fields 
let tableFields= ["datetime", "city","ar","country","shape","durationMinutes","comments"]

// Obtaining the HTML reference 
let tBody = d3.select("tbody");
let dateTime = d3.select("#datetime")
let btnSearch = d3.select("#filter-btn")

// Building the html table 
let loadTableRows = (allData) => { 
    
    tBody.html("");
	
	allData.forEach(allRowData => { 
		
		let tableRow = tBody.append("tr");  
		
		tableFields.forEach(field => tableRow.append("td").text(allRowData[field]))
	});
}

// Display the html table with all the rows
loadTableRows(tableData);

btnSearch.on("click", () => {

    // Create event handler
    d3.event.preventDefault();

    let searchDateTime = dateTime.property("value");

    let filterTableDate = tableData.filter(tableData => tableData.datetime === searchDateTime);

    if(filterTableDate.length !== 0 ){
        loadTableRows(filterTableDate)
    }
    else{
        tBody.html("")

        tBody.append("tr").append("td").text("Unfortunately, there were no sightings on that date")
    }
})
