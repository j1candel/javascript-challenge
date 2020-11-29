// Selecting data from from data.js
let tableData = data;


let tableFields= ["datetime", "city","ar","country","shape","durationMinutes","comments"]

let tBody = d3.select("tbody");
let dateTime = d3.select("#datetime")
let btnSearch = d3.select("#filter-btn")


let loadTableRows = (allData) => { 
    
    tBody.html("");
	
	allData.forEach(allRowData => { 
		
		let tableRow = tBody.append("tr");  
		
		tableFields.forEach(field => tableRow.append("td").text(allRowData[field]))
	});
}


loadTableRows(tableData);

btnSearch.on("click", () => {

    d3.event.preventDefault();

    let searchDateTime = dateTime.property("value")

    let filteredTableDate = tableData.filter(tableData => tableData.dateTime === searchDateTime)
})