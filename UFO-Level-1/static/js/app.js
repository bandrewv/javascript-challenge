// Setting variables for data set from data.js file,
// the button and user fill-in form in the .html file
let tableData = data,
    button = d3.select("#filter-btn"),
    form = d3.select("form"),
    tbody = d3.select("tbody");

// Console logging data from data.js to 
console.log(data);

// Appending one table row for each sighting object and appending row data
data.forEach((sighting) => {
    let row = tbody.append("tr");
    Object.values(sighting).forEach(value => {
        let cell = row.append("td");
        cell.text(value);
    })
})


// // Completing the event handler function for the datetime form
// const runEnter = () => {

//     // Preventing the default function from occuring
//     d3.event.preventDefault();

//     // Selecting input element and getting the raw HTML node
//     let inputElement = d3.select("#datetime");

//     // Then collecting the input value from the HTML node
//     let inputValue = inputElement.property("value");
// }
