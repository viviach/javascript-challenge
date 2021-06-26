//Level 1: Automatic Table and Date Search (Required)

//1. Using the UFO dataset provided in the form of an array of JavaScript objects, 
//write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");


//We will insert the info to the table, creating all the rows needed per dictionary in the data
function table(dataSet){
  tbody.html("")
    dataSet.forEach((element) => {
        var row = tbody.append("tr");
        Object.entries(element).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });
};

table(tableData)


//2. Use a date form in your HTML document and write JavaScript code that will listen for events 
// search through the date/time column to find rows that match user input.

  // Select the button
var button = d3.select("#filter-btn");

   // Create event handler 
button.on("click", runEnter);

  // Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value"); 

    //print the date selected   
    console.log(inputValue);

    //filter the tableData with the date selected 
    var filteredData = tableData.filter(element => element.datetime === inputValue);
    
    //print the filtered data
    console.log(filteredData);
    table(filteredData)

  // //create a table for the filtered data, if there is no data selected, return the complete table data
  //   if (filteredData.length===0){
  //     table(tableData);
  //     } 
  //   else { 
  //     table(filteredData);
  //   }
       
  };



 
