// Selecting data from from data.js
let tableData = data;

// Making an array with all the names of the fields 
let tableFields= ["datetime", "city","state","country","shape","durationMinutes","comments"]

// Obtaining the HTML reference 
let tBody = d3.select("tbody");
let btnSearch = d3.select("#btnSearch")

let dateTime = d3.select("#inputDateTime")
let city = d3.select("#inputCity")
let state = d3.select("#inputState")
let country = d3.select("#inputCountry")
let shape = d3.select("#inputShape")

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
    let searchCity = city.property("value");
    let searchState = state.property("value");
    let searchCountry = country.property("value");
    let searchShape = shape.property("value");
    
        // Filter the table data to only return data equal to the input variable 
        if(searchDateTime){
            let filterTableDate = tableData.filter(tableData => tableData.datetime === searchDateTime);

            // If the length of filterTableDate is longer than one row then the loadTableRows function begins
            if(filterTableDate.length !== 0 ){
                loadTableRows(filterTableDate)
            }

            // If the lenth of filterTableDate is equal 0 then they delete the table and display the text 
            else{
                tBody.html("")

                tBody.append("tr").append("td").text("Unfortunately, there were no sightings on that date");
            }
        }

        else if(searchCity){
            let filterTableDate = tableData.filter(tableData => tableData.city === searchCity);

            // If the length of filterTableDate is longer than one row then the loadTableRows function begins
            if(filterTableDate.length !== 0 ){
                loadTableRows(filterTableDate)
            }

            // If the lenth of filterTableDate is equal 0 then they delete the table and display the text 
            else{
                tBody.html("")

                tBody.append("tr").append("td").text("Unfortunately, there were no sightings on that date");
            }
        }
        
        else if(searchState){
            let filterTableDate = tableData.filter(tableData => tableData.state === searchState);

            // If the length of filterTableDate is longer than one row then the loadTableRows function begins
            if(filterTableDate.length !== 0 ){
                loadTableRows(filterTableDate)
            }

            // If the lenth of filterTableDate is equal 0 then they delete the table and display the text 
            else{
                tBody.html("")

                tBody.append("tr").append("td").text("Unfortunately, there were no sightings on that date");
            }
        }

        else if(searchCountry){
            let filterTableDate = tableData.filter(tableData => tableData.country === searchCountry);

            // If the length of filterTableDate is longer than one row then the loadTableRows function begins
            if(filterTableDate.length !== 0 ){
                loadTableRows(filterTableDate)
            }

            // If the lenth of filterTableDate is equal 0 then they delete the table and display the text 
            else{
                tBody.html("")

                tBody.append("tr").append("td").text("Unfortunately, there were no sightings on that date");
            }
        }

        else{
            let filterTableDate = tableData.filter(tableData => tableData.shape === searchShape);

            // If the length of filterTableDate is longer than one row then the loadTableRows function begins
            if(filterTableDate.length !== 0 ){
                loadTableRows(filterTableDate)
            }

            // If the lenth of filterTableDate is equal 0 then they delete the table and display the text 
            else{
                tBody.html("")

                tBody.append("tr").append("td").text("Unfortunately, there were no sightings on that date");
            }
        }
        })
