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



// =====================================================================================
// Add the ability to filter the data using Data-Driven Documents (D3 for short) library
    //  It works by "listening" for events, such as a button click, 
    // then reacts according to the code we've created.
// =====================================================================================


// create a couple of variables to hold our date data, both filtered and unfiltered
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);