// JS and DOM Manipulation
// Banafshe Golpour assignment

// from data.js
var tableData = data;

// console.log the tableData
console.log(tableData);

// Selecting the tbody html element
var tbody = d3.select("tbody");
// function table(data) {
//  tbody.html("");

// Send data from data.js to console.log
console.log(data);

// Update each cell's text with the UFO data value
data.forEach(function(ufoSighting) {
  console.log(ufoSighting);

// Append a row and then adds new rows of data for each UFO sighting
var row = tbody.append("tr");
Object.entries(ufoSighting).forEach(function([key, value]) {
  console.log(key, value);
    // Append a cell to the row for each value in the ufoSighting object
  var cell = tbody.append("td");
  cell.text(value);
  });
});
// Reference to the button with the id set to the "filter-btn"
var submit = d3.select("#filter-btn")

// Using 'on' function to attach event to click
submit.on("click", function() {

// Stop the reloading on click    
d3.event.preventDefault();

// Selecting the item the class 'summary', change the html content
d3.select(".summary").html("");

// Create variables for user input
var inputElement = d3.select("#datetime");
var inputValue = inputElement.property("value");

// Filtering data based on user input
var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

// Same as above, except values filtered by data
  filteredData.forEach((dateData) => {
    var row = tbody.append("tr");
    Object.entries(dateData).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
});
