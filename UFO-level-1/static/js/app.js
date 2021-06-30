//Level 1: Automatic Table and Date Search (Required)

//1. Using the UFO dataset provided in the form of an array of JavaScript objects, 
//write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

//We will create a funtion that create a table with the rows needed per dictionary in the data and insert the values on it
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

//We will create and insert the data for the whole data base
table(tableData)


//2. Use a date form in your HTML document and write JavaScript code that will listen for events 
// search through the date/time column to find rows that match user input.

// Select the button
 var button = d3.select("#filter-btn");
 // Create event handler 
 button.on("click", runEnter);

 //if we want to use form instead of button
// var form=d3.select("#datetime");
// form.on("change", runEnter);

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
    //using the function table, we create a table and insert the values of the filteredData
    //table(filteredData);

    if (inputValue){
      table(filteredData)
    }else{
      table(tableData);
    }
      
  };





 
