// from data.js
var tableData = data;

// YOUR CODE HERE!

// * Using the UFO dataset provided in the form of an array of JavaScript objects, 
//   write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
//   * Make sure you have a column for `date/time`, 
//     `city`, `state`, `country`, `shape`, `duration`, and `comment` at the very least.


var tbody = d3.select("tbody"); // Use d3 to select <tbody> </tbody> 
// in the HTML file. 

// Use d3 to update each cell's text with
// UFO sighting values (datetime, city, state, country, shape, duration, comments)
tableData.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.values(ufoSightings).forEach((value) => {
      // Append a cell to the row for each value
      // in the UFO sighting object
      var cell = row.append("td");
      cell.text(value);
    }); 
});


//* Use a date form in your HTML document and 
//  write JavaScript code that will listen for events and 
//  search through the `date/time` column to find rows 
//  that match user input.


// Select the button. 
var button = d3.select("#filter-btn");

// Select the input. 
var dateTime = d3.select("#datetime");

