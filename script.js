// Add players into different tiers

// Store tiers in individual arrays
const tier1 = ["Diet Doc", "Tom Robinson", "Pumpkin Puss", "Darin Ekkelkamp", "Luke Baeslack", "Steve Boon", "Patrick Russell", "Dik Gudmunson", "Ravi", "Mother Goose", "Banjo", "Gomez", "Collin Vanderark"];
const tier2 = ["Villanazul", "Jose Martinez", "Turner Stiers", "Carlos Dominguez", "Jerry Rivers", "Zeus", "Gunnar", "Kyle", "Giles", "Derrick", "Brian", "Micah", "Felipe", "Guido", "Pepper", "Kab", "Kevin Maas", "Chris Wyatt", "Mucke", "Cody See", "Garret Kuipers", "Burmeister", "Jimmy Stewart", "Caleb Boon", "Max Hanson", "Guy Corp", "Tim Hanson", "Vader", "Paul Westra", "Mike Lubbers"];
const tier3 = ["Atticus Finch", "Phifer", "Nathan Sarchet", "Richard Tetu", "Stan Barta", "Tim Boonstra", "Steve Fikkert", "Greay Lawn", "Howbout Tiger", "Steve Lervick", "Dan Thayer", "Chris Baisch", "Grandpapi", "Ivan Van Duyn", "Ted Stiers", "Bob Chik-Fil-A"];
const tier4 = ["Meat Man", "King", "Largemouth", "Noah Barta", "Julian Dailey", "Mike Comacho", "Myers", "Lyle Leopold", "Rod", "Lane Sacksteder", "Brett Nelson", "Canaan"];

var allPlayers = [tier1, tier2, tier3, tier4]
console.log("allPlayers before storage: " + allPlayers)
// localStorage.setItem("players", allPlayers)
// allPlayers = localStorage.getItem("players")
// console.log("allPlayers after storage: " + allPlayers)


const tier1Div = $('#tier1Div');
const tier2Div = $('#tier2Div');
const tier3Div = $('#tier3Div');
const tier4Div = $('#tier4Div');

// Display names in correct div
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
        playerName.attr("class", "col-md-7 playerName");
        playerName.text(tier[i]);

        // Creates delete button for each player
        var deleteCol = $("<button>");
        deleteCol.attr("class", "col-md-3 deleteBtn")
        deleteCol.data("tierArray", tier);
        // deleteCol.attr("data-player", player)
        deleteCol.text("Delete");
        newRow.append(playerName, deleteCol)
        tierDiv.append(newRow);

    }
}
$(document).on("click", ".deleteBtn", function (event) {
    event.preventDefault();
    console.log("clicked")

    console.log($(this).closest(".row").children(".playerName").contents().text())
    console.log($(this).closest(".row").children(".playerName").contents())

    const tierArray = $(this).data("tierArray")
    console.log("Tier Array: " + tierArray)
    const playerDeleted = $(this).closest(".row").children(".playerName").contents().text();
    console.log("Player deleted: " + playerDeleted)
    const index = tierArray.indexOf(playerDeleted);
    console.log("index " + index)

    tierArray.splice(index, 1);

    console.log("tier Array:" + tierArray)

    $(this).closest(".row").remove();
    console.log(tier2)

})

// $(".deleteBtn").on("click", function (event) {
//     event.preventDefault();
//     console.log("clicked")

//     console.log($(this).closest(".row").children(".playerName").contents().text())
//     console.log($(this).closest(".row").children(".playerName").contents())

//     const tierArray = $(this).data("tierArray")
//     console.log("Tier Array: " + tierArray)
//     const playerDeleted = $(this).closest(".row").children(".playerName").contents().text();
//     console.log("Player deleted: " + playerDeleted)
//     const index = tierArray.indexOf(playerDeleted);
//     console.log("index " + index)

//     tierArray.splice(index, 1);

//     console.log("tier Array:" + tierArray)

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

// Add a save button to save the inputted players to local storage
$("#save-players").on("click", function (event) {
    localStorage.setItem(players, allPlayers)
})


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

    const tierOnePlayers = draftPlayers(tier1, numOfTier1)
    const tierTwoPlayers = draftPlayers(tier2, numOfTier2)
    const tierThreePlayers = draftPlayers(tier3, numOfTier3)
    const tierFourPlayers = draftPlayers(tier4, numOfTier4)

    // Keeps track of how much of the team roster is filled
    let rosterSpot = 1;

    // Assign 1st selected player to team 1, 2nd to team two, etc and repeat until all teams have correct number of players from that tier
    // Repeat the process for all tiers
    rosterSpot = assignDraftedPlayers(tierOnePlayers, teams, rosterSpot)
    rosterSpot = assignDraftedPlayers(tierTwoPlayers, teams, rosterSpot)
    rosterSpot = assignDraftedPlayers(tierThreePlayers, teams, rosterSpot)
    rosterSpot = assignDraftedPlayers(tierFourPlayers, teams, rosterSpot)

    // Display each team in the proper div
    renderTeams(teams);
})

function assignDraftedPlayers(tier, teams, k) {

    for (let i = 0; i < tier.length;) {


        for (let j = 0; j < teams.length; j++) {
            console.log("j" + j)
            console.log("k" + k)

            teams[j][k] = tier[i];
            console.log(teams)
            i++;
        }
        k++;
    }
    return k
}

function draftPlayers(tier, numPicks) {
    const selectedPlayers = [];
    const copyOfTierArray = Array.from(tier);
    for (i = 0; i < numPicks; i++) {

        // Use Math.random to choose a random player from that tier
        let randomIndex = Math.floor(Math.random() * copyOfTierArray.length);

        selectedPlayers.push(copyOfTierArray[randomIndex])

        copyOfTierArray.splice(randomIndex, 1);

        console.log("Original" + tier)
        console.log("Copy" + copyOfTierArray)

    }

    return selectedPlayers;
}

function renderTeams(teams) {
    $("#teams").empty();
    console.log("Teams Render " + teams)
    for (let i = 0; i < teams.length; i++) {


        const newRow = $("<div>");
        newRow.attr("class", "row")
        const teamName = $("<h2>");


        for (let j = 1; j < 11; j++) {

            const teamRoster = $("<div>");
            teamRoster.attr("class", "col-md-6 teamRoster");
            console.log("Rosters " + teams[i][j])
            teamRoster.text(teams[i][j]);

            newRow.append(teamRoster);
        }


        teamName.text("Team " + i)
        $("#teams").append(teamName)
        $("#teams").append(newRow);
    }
}

    // Add validation

        // No errors

        // Handle position shortages

    // Bonus: Allow user to manually customize teams

