
// DOM Content Loaded Event:

// The DOMContentLoaded event ensures that the script runs after the HTML document has been completely loaded and parsed.
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("form"); // why ?

    // Accessing and Manipulating DOM Elements:

    // Using getElementById to access DOM elements by their ID.

    var tableBody = document.querySelector("tbody"); // why ?

    // Event Listeners:

    // Adding an event listener to the button to handle click events.
    document.getElementById("btn").addEventListener('click', function (event) {

        // Preventing Default Behavior:

        // Using event.preventDefault() to prevent the default form submission behavior, which typically reloads the page.
        event.preventDefault();  // Prevent form submission


        // Accessing and Manipulating DOM Elements:

        // Using getElementById to access DOM elements by their ID.

        // Get values from inputs
        var inputElement1 = document.getElementById("ED").value;
        var inputElement2 = document.getElementById("Category").value;
        var inputElement3 = document.getElementById("amount").value;

        // Creating and Appending Elements:
        // Creating new DOM elements using document.createElement.
        // Appending child elements to a parent element using appendChild.

        // Create a new row and cells
        var newRow = document.createElement("tr");

        var descriptionCell = document.createElement("td");

        // Manipulating Element Properties:
        // Setting the textContent property of an element to update its content.
        descriptionCell.textContent = inputElement1;

        newRow.appendChild(descriptionCell);

        var categoryCell = document.createElement("td");
        categoryCell.textContent = inputElement2;
        newRow.appendChild(categoryCell);

        var amountCell = document.createElement("td");
        amountCell.textContent = inputElement3;
        newRow.appendChild(amountCell);

        // Append the new row to the table body
        tableBody.appendChild(newRow);

        // Form Handling:
        // Retrieving values from input fields.
        // Clearing input fields after processing.

        // Clear input fields after updating table
        document.getElementById("ED").value = "";
        document.getElementById("amount").value = "";
    });
});

// These all the concepts today i had learned in JS

// Summary of JavaScript Concepts:
// Event Handling:

// DOMContentLoaded
// addEventListener
// preventDefault
// DOM Manipulation:

// getElementById
// querySelector
// createElement
// appendChild
// textContent
// Form Handling:

// Accessing input values
// Clearing input fields

// 

