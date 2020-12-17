// Add players into different tiers

// Store tiers in individual arrays
const tier1 = ["banana", "George", "bob", "Jou", "Kog"];
const tier2 = ["apple"];
const tier3 = ["juice"];
const tier4 = ["fruit"];

const tier1Div = $('#tier1Div');
const tier2Div = $('#tier2Div');
const tier3Div = $('#tier3Div');
const tier4Div = $('#tier4Div');

// Display names in correct div
renderTierPlayers(tier1, tier1Div, "tier1")
renderTierPlayers(tier2, tier2Div, "tier2")
renderTierPlayers(tier3, tier3Div, "tier3")
renderTierPlayers(tier4, tier4Div, "tier4")

// Function that displays players from each tier on page
function renderTierPlayers(tier, tierDiv, tierNumber) {
    tierDiv.empty();
    for (let i = 0; i < tier.length; i++) {

        var newRow = $("<div>");
        newRow.attr("class", "row")

        const playerName = $("<div>");
        playerName.attr("class", "col-md-7 playerName");
        playerName.text(tier[i]);

        // Creates delete button for each player
        var deleteCol = $("<button>");
        deleteCol.attr("class", "col-md-3 deleteBtn")
        // deleteCol.attr("data-player", player)
        deleteCol.text("Delete");

        // Assigns class appropriate to which tier it belongs to
        // if (tierNumber === 1)
        // {

        // }
        // switch (tierNumber) {
        //     case 1: deleteCol.attr("class", "col-md-3 deleteBtn1");
        //         break;
        //     case 2: deleteCol.attr("class", "col-md-3 deleteBtn2");
        //         break;
        //     case 3: deleteCol.attr("class", "col-md-3 deleteBtn3");
        //         break;
        //     case 4: deleteCol.attr("class", "col-md-3 deleteBtn4");

        // }


        newRow.append(playerName, deleteCol)
        tierDiv.append(newRow);

        console.log(tier2)

    }
    // $(".deleteBtn").on("click", function (event) {
    //     event.preventDefault();
    //     console.log("clicked")

    //     console.log($(this).closest(".row").children(".playerName").contents().text())
    //     console.log($(this).closest(".row").children(".playerName").contents())


    //     const playerDeleted = $(this).closest(".row").children(".playerName").contents().text();
    //     const index = tier1.indexOf(playerDeleted);

    //     tier1.splice(index, 1);

    //     console.log(tier2)

    //     $(this).closest(".row").remove();
    //     console.log(tier2)

    // })
    // $(".deleteBtn").on("click", function (event) {
    //     event.preventDefault();
    //     console.log("clicked")
    //     console.log(tier2)

    //     console.log($(this).closest(".row").children(".playerName").contents().text())
    //     console.log($(this).closest(".row").children(".playerName").contents())

    //     console.log($(this).attr("data-tier"))

    //     const playerDeleted = $(this).closest(".row").children(".playerName").contents().text();
    //     // const tierHoldingDeletedPlayer = $(this).closest(".row").children(".playerName").contents().tier
    //     const tierHoldingDeletedPlayer = tier
    //     console.log(tierHoldingDeletedPlayer)

    //     const index = tierNumber.indexOf(playerDeleted);
    //     console.log(tierNumber)
    //     tierNumber.splice(index, 1);

    //     console.log(tier2)

    //     $(this).closest(".row").remove();
    //     console.log(tier2)

    // })
}

// $(".deleteBtn1").on("click", function (event) {
//     event.preventDefault();
//     console.log("clicked")

//     console.log($(this).closest(".row").children(".playerName").contents().text())
//     console.log($(this).closest(".row").children(".playerName").contents())


//     const playerDeleted = $(this).closest(".row").children(".playerName").contents().text();
//     const index = tier1.indexOf(playerDeleted);

//     tier1.splice(index, 1);

//     console.log(tier2)

//     $(this).closest(".row").remove();
//     console.log(tier2)

// })

// Input to add a player to tier
// console.log($("#addPlayer1").text)
$("#add-button1").on("click", function (event) {
    event.preventDefault();
    let playerAdded = $("#addPlayer1").val().trim();
    tier1.push(playerAdded);
    renderTierPlayers(tier1, tier1Div)
    $("#addPlayer1").val("")
})

$("#add-button2").on("click", function (event) {
    event.preventDefault();
    let playerAdded = $("#addPlayer2").val().trim();
    tier2.push(playerAdded);
    renderTierPlayers(tier2, tier2Div)
    $("#addPlayer2").val("")
})

$("#add-button3").on("click", function (event) {
    event.preventDefault();
    let playerAdded = $("#addPlayer3").val().trim();
    tier3.push(playerAdded);
    renderTierPlayers(tier3, tier3Div)
    $("#addPlayer3").val("")
})

$("#add-button4").on("click", function (event) {
    event.preventDefault();
    let playerAdded = $("#addPlayer4").val().trim();
    tier4.push(playerAdded);
    renderTierPlayers(tier4, tier4Div)
    $("#addPlayer4").val("")
})

// $(".deleteBtn").on("click", function (event) {
//     event.preventDefault();
//     console.log("clicked")

//     console.log($(this).closest(".row"))
//     $(this).closest(".row").remove();
//     const player = $(this).closest(".playerName").text()
//     console.log(player)


// })

// Add a save button to save the inputted players to local storage



// Randomly generate 10-man teams

$("#teamGenerator").on("click", function (event) {

    const teams = [];
    // Get user input of number of teams
    event.preventDefault();
    console.log("click")
    console.log($("#numberOfTeams").val())

    // Get user input of number of players from each tier
    const numOfTeams = $("#numberOfTeams").val();
    const numOfTier1 = $("#numberOfTierOne").val()
    const numOfTier2 = $("#numberOfTierTwo").val()
    const numOfTier3 = $("#numberOfTierThree").val()
    const numOfTier4 = $("#numberOfTierFour").val()

    // Create new array for each team to store that team's players in using for loop
    for (let i = 0; i < numOfTeams; i++) {
        let newTeam = {
            1: "",
            2: "",
            3: "",
            4: "",
            5: "",
            6: "",
            7: "",
            8: "",
            9: "",
            10: ""
        }

        teams.push(newTeam)
        console.log(teams)
    }

    // Iterate over each tier array to get desired amount of players from each tier

    // The amount of iterations is the amount of players specified to be selected from each tier times the number of teams
    // for (let j = 0; j<teams.length; j++) {
    //     for ()
    // }

    const tierOnePlayers = draftPlayers(tier1, 4)
    console.log(tierOnePlayers)

        // Use Math.random to choose a random player from that tier

        // Assign 1st selected player to team 1, 2nd to team two, etc and repeat until all teams have correct number of players from that tier

        // Repeat the process for all tiers

    // Display each team in the proper div
})

function draftPlayers(tier, numPicks) {
    const selectedPlayers = [];
    const copyOfTierArray = Array.from(tier);
    for (i=0; i<numPicks; i++) {
        
        let randomIndex = Math.floor(Math.random() * copyOfTierArray.length);

        selectedPlayers.push(copyOfTierArray[randomIndex])

        copyOfTierArray.splice(randomIndex, 1);

        console.log("Original" + tier)
        console.log("Copy" + copyOfTierArray)

    }

    return selectedPlayers;
}

    // Add validation

        // No errors

        // Handle position shortages

    // Bonus: Allow user to manually customize teams

