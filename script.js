// Add players into different tiers

// Store tiers in individual arrays
const tier1 = ["banana", "George"];
const tier2 = ["apple"];
const tier3 = ["juice"];
const tier4 = ["fruit"];

// Display names in correct div
displayTiers()

// Function that displays players from each tier on page
function displayTiers() {

    for (let i = 0; i < tier1.length; i++) {
        var newDiv = $("<div>")
        var newRow = $("<div>");
        newRow.attr("class", "row")

        const playerName = $("<div>");
        playerName.attr("class", "col-md-7");
        playerName.text(tier1[i]);

        // Creates delete button for each player
        var deleteCol = $("<button>");
        deleteCol.attr("class", "col-md-3 deleteBtn")
        deleteCol.text("Delete");

        newRow.append(playerName, deleteCol)

        newDiv.append(newRow)

        $('#tier1').append(newDiv);
    }
    for (let i = 0; i < tier2.length; i++) {
        var newDiv = $("<div>")
        var newRow = $("<div>");
        newRow.attr("class", "row")

        const playerName = $("<div>");
        playerName.attr("class", "col-md-7");
        playerName.text(tier2[i]);

        // Creates delete button for each player
        var deleteCol = $("<button>");
        deleteCol.attr("class", "col-md-3 deleteBtn")
        deleteCol.text("Delete");

        newRow.append(playerName, deleteCol)

        newDiv.append(newRow)

        $('#tier2').append(newDiv);
    }
    for (let i = 0; i < tier3.length; i++) {
        var newDiv = $("<div>")
        var newRow = $("<div>");
        newRow.attr("class", "row")

        const playerName = $("<div>");
        playerName.attr("class", "col-md-7");
        playerName.text(tier3[i]);

        // Creates delete button for each player
        var deleteCol = $("<button>");
        deleteCol.attr("class", "col-md-3 deleteBtn")
        deleteCol.text("Delete");

        newRow.append(playerName, deleteCol)

        newDiv.append(newRow)

        $('#tier3').append(newDiv);
    }
    for (let i = 0; i < tier4.length; i++) {
        var newDiv = $("<div>")
        var newRow = $("<div>");
        newRow.attr("class", "row")

        const playerName = $("<div>");
        playerName.attr("class", "col-md-7");
        playerName.text(tier4[i]);

        // Creates delete button for each player
        var deleteCol = $("<button>");
        deleteCol.attr("class", "col-md-3 deleteBtn")
        deleteCol.text("Delete");

        newRow.append(playerName, deleteCol)

        newDiv.append(newRow)

        $('#tier4').append(newDiv);
    }
}

    // Input to add a player to tier
    // console.log($("#addPlayer1").text)
    $("#add-button1").on("click", function (event) {
        event.preventDefault();
        let playerAdded = $("#addPlayer1").val().trim();
    
    })

    // Add a save button to save the inputted players to local storage

// Randomly generate 10-man teams

    // Get user input of number of teams

    // Get user input of number of players from each tier

    // Create new array for each team to store that team's players in using for loop

    // Iterate over each tier array to get desired amount of players from each tier

        // The amount of iterations is the amount of players specified to be selected from each tier times the number of teams

        // Use Math.random to choose a random player from that tier

        // Assign 1st selected player to team 1, 2nd to team two, etc and repeat until all teams have correct number of players from that tier

        // Repeat the process for all tiers

    // Display each team in the proper div

    // Add validation

        // No errors

        // Handle position shortages

    // Bonus: Allow user to manually customize teams

