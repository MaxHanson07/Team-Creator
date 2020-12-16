// Add players into different tiers

    // Store tiers in individual arrays

    console.log("hello")
    
    const tier1 = ["banana"];
    const tier2 = [];
    const tier3 = [];
    const tier4 = [];

    // Display names in correct div
    displayTiers(tier1)

    // Function that displays players from each tier on page
    function displayTiers(tier) {
        for (let i = 0; i < tier.length; i++) {
            const newDiv = $("<div>");
            newDiv.text(tier[i]);
            $("#tier1").append(newDiv);
        }
    }


    // Delete button

    // Input to add a player to tier

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

