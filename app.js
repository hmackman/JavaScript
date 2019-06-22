// from data.js
var tableData = data;

// YOUR CODE HERE
var tbody = d3.select("tbody");

function buildTable(data) {

    tbody.html("");

    data .forEach((ufodata) => {
        var row = tbody.append("tr");
        Object.entries(ufodata).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

}
 


function handleClick() {

    d3.event.preventDefault();

    var date_input = d3.select("#datetime").property("value");
    let copy_data = tableData;

    if (date_input) {
        copy_data = copy_data.filter(row => row.datetime === date_input);
    }

    buildTable (copy_data);

}

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);


// date_input.on("click", function () {
//     Object.entries(ufodata).forEach(([key, value]) => {
//         if (key === "datetime" && value === date_input) {
//             return [key, value];
//         }
        
//     });
// });

// date_input.on("click", function () {
//     Object.entries(ufodata).forEach(([key, value]) => {
//         if ("datetime" === date_input) {
//             return [key, value];
//         }
        
//     });
// });