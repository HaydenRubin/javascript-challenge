// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

tableData.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.values(ufoSightings).forEach((value) => {
      var cell = row.append("td");
      cell.text(value);
    }); 
});