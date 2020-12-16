// Add players into different tiers

// Store tiers in individual arrays
const tier1 = ["banana", "George"];
const tier2 = ["apple"];
const tier3 = ["juice"];
const tier4 = ["fruit"];

const tier1Div = $('#tier1Div');
const tier2Div = $('#tier2Div');
const tier3Div = $('#tier3Div');
const tier4Div = $('#tier4Div');

// Display names in correct div
// displayTiers()

renderTierPlayers(tier1, tier1Div)
renderTierPlayers(tier2, tier2Div)
renderTierPlayers(tier3, tier3Div)
renderTierPlayers(tier4, tier4Div)

// Function that displays players from each tier on page
function renderTierPlayers(tier, tierDiv) {
    tierDiv.empty();
    for (let i = 0; i < tier.length; i++) {

        var newRow = $("<div>");
        newRow.attr("class", "row")

        const playerName = $("<div>");
        playerName.attr("class", "col-md-7");
        playerName.text(tier[i]);

        // Creates delete button for each player
        var deleteCol = $("<button>");
        deleteCol.attr("class", "col-md-3 deleteBtn")
        deleteCol.text("Delete");

        newRow.append(playerName, deleteCol)
        tierDiv.append(newRow);
        
    }
}

    // Input to add a player to tier
    // console.log($("#addPlayer1").text)
    $("#add-button1").on("click", function (event) {
        event.preventDefault();
        let playerAdded = $("#addPlayer1").val().trim();
        tier1.push(playerAdded);
        renderTierPlayers(tier1, tier1Div)
    })

    $("#add-button2").on("click", function (event) {
        event.preventDefault();
        let playerAdded = $("#addPlayer2").val().trim();
        tier2.push(playerAdded);   
        renderTierPlayers(tier2, tier2Div)
    })

    $("#add-button3").on("click", function (event) {
        event.preventDefault();
        let playerAdded = $("#addPlayer3").val().trim();
        tier3.push(playerAdded);   
        renderTierPlayers(tier3, tier3Div)
    })

    $("#add-button4").on("click", function (event) {
        event.preventDefault();
        let playerAdded = $("#addPlayer4").val().trim();
        tier4.push(playerAdded);
        renderTierPlayers(tier4, tier4Div) 
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

