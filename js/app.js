// import the data from data.js
    // use const because we don’t want the variable to be reassigned or reused at all in our program. 
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");










// Create a table
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    // use a fat arrow function
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            // This is the variable that holds only each value from the object
            cell.text(val);
            }
        );
    });
}