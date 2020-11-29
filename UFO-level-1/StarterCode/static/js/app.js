// Selecting data from from data.js
let tableData = data;


let tableFields= ["datetime", "city","ar","country","shape","durationMinutes","comments"]

let tbody = d3.select("tbody");
let datetime = d3.select("#datetime")
let btnSearch = d3.select("#filter-btn")


let loadTableRows = (allData) => { 
    
    tbody.html("");
	
	allData.forEach(allRowData => { 
		
		let tableRow = tbody.append("tr");  
		
		tableFields.forEach(field => tableRow.append("td").text(allRowData[field]))
	});
}


loadTableRows(tableData);