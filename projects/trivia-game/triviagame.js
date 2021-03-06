//TRIVIA QUESTIONS
var scienceQs = ["What Saturn moon has a methane cycle that differentiates it from other moons of the planet?"];
scienceQs.push("What does ATP, the molecular unit of energy, stand for?");
scienceQs.push("What does the study of optics have to do with?");
scienceQs.push("What is the name of the amount of blood cells in a certain amount of blood?");
scienceQs.push("Which prominent Renaissance scientist is credited with the discovery of the pendulum?(Last name only)");

var seventiesHitsQs = ["Which artist attributed his enhanced vocal range to extra teeth?(First and last name)"];
seventiesHitsQs.push("Which Beatles member crossed the Abbey Road barefoot?(First name only)");
seventiesHitsQs.push("The Swedish Europop group, ______,  got their name by taking the first letter of each member's name.");
seventiesHitsQs.push("During a performance at the London Astoria, what rock star smashed his guitar?(First and last name)");
seventiesHitsQs.push("Fleetwood Mac's lead guitarist, Jeremy Spencer, left the band in 1971 to join what?");

var holidaysQs = ["Scholar and activist Dr. Maulana Karenga established what holiday in California in 1966?"];
holidaysQs.push("The practice of decorating Easter eggs can be traced back to what country?");
holidaysQs.push("Every Halloween, Charlie Brown helps his friend Linus wait for what character to appear?");
holidaysQs.push("The holiday that takes place the day after Halloween is...")
holidaysQs.push("In which modern country was St. Nicholas born?");

var americanLiteratureQs = ["Dan Brown's Da Vinci Code opens with a murder in which famous museum?"];
americanLiteratureQs.push("What do the initials J.D. stand for in author J.D. Salinger's name?");
americanLiteratureQs.push("Which story authored by Washington Irving has the character Ichabod Crane?");
americanLiteratureQs.push("In what fictional town is Harper Lee's To Kill a Mockingbird set?");
americanLiteratureQs.push("Who are the two main characters in Of Mice and Men? (First names only)");

//TRIVIA ANSWERS
var scienceAs = ["titan", "adenosine triphosphate", "light", "hematocrit", "galilei"];
var seventiesHitsAs = ["freddie mercury", "paul", "abba", "jimi hendrix", "cult"];
var holidaysAs = ["kwanzaa", "africa", "the great pumpkin", "all saint's day", "turkey"];
var americanLiteratureAs = ["the louvre", "jerome david", "the legend of sleepy hollow", "maycomb", "george and lennie"];

//GAME
document.write("<h1> Science </h1>");
displayDollars();
document.write("<h1> Seventies' Hits </h1>")
displayDollars();
document.write("<h1> Holidays </h1>");
displayDollars();
document.write("<h1>American Literature</h1>");
displayDollars();

var player1Total = 0; 
var player2Total = 0; 
var player3Total = 0;

alert("Hello contestants, welcome to this totally fun, entertaining trivia game!")
alert("Choose three players and enter in their names!")

var player1 = enterNames();
var player2 = enterNames();
var player3 = enterNames();

alert("You will have four categories today with five questions each. The categories are as follows...")
alert("Science, Seventies' Hits, Holidays, and American Literature.");
alert("For each category, there will be questions worth $200, $400, $600, $800, and $1000.");
alert("Rules: \n 1. If a player answers incorrectly, the other players will not be able to answer. \n 2. The player that entered the correct answer gets to choose the next question. \n 3. Please enter your name in properly, so you can be awarded your money.");
alert("Are we ready for some trivia? "+player1+ ", choose your first question.");

do{
    var i = 0;
    i++;
    var category = prompt("Category?")
    var cash = prompt("Cash amount?");
    var returnArray = chooseQ(category, cash);
    var verdict = gradeAnswer(returnArray[0], returnArray[1]);
    if(verdict !== "no"){
        var player = prompt("Which player answered?");
        choosePlayer(player, verdict);
    }   
}
while(i <10/*scienceQs !== seventiesHitsQs && holidaysQs !== americanLiteratureQs && scienceQs !== holidaysQs*/);
console.log(scienceQs);
console.log(seventiesHitsQs);

alert(player1+ ": "+ player1Total+ ", "+player2+": "+player2Total+ ", "+player3+": "+ player3Total);
var winnerName = compareScores(player1Total, player2Total, player3Total);
alert("The winner of this round of Jeopardy is...." +winnerName+"!" );

//FUNCTIONS
function enterNames(){
    var name = prompt("Enter Player Name");
    alert("Welcome "+name+"!");
    return name;
}

function cashValue(cash){
    var index = (cash/200)-1;
    return index;
}

function chooseQ(category, cash){
    var index = cashValue(cash);
    if(category.toLowerCase() === "science"){
        var response = prompt(scienceQs[index]);
    }
    else if(category.toLowerCase() === "seventies' hits" || category.toLowerCase() === "seventies hits"){
        var response = prompt(seventiesHitsQs[index]);
    }
    else if(category.toLowerCase() === "holidays"){
        var response = prompt(holidaysQs[index]);
    }
    else if(category.toLowerCase() === "american literature"){
        var response = prompt(americanLiteratureQs[index]);
    }
    else{
        alert("Please pick a provided category.");
    }
    return [response, index];
}

function gradeAnswer(response, index){
     if(category.toLowerCase() === "science"){
        if(scienceQs[index] === "This question has already been answered. (Click okay.)"){
            return "no";
        }          
        else if(response.toLowerCase() === scienceAs[index]){
            alert("Correct!");
            scienceQs[index] = "This question has already been answered. (Click okay.)";
            return true;
        }
        else{
            alert("Incorrect :(");
            scienceQs[index] = "This question has already been answered. (Click okay.)";
            return false;
        }}

    else if(category.toLowerCase() === "seventies' hits" || category.toLowerCase() === "seventies hits"){
        if(seventiesHitsQs[index] === "This question has already been answered. (Click okay.)"){
            return "no";
        }
        else if(response.toLowerCase() === seventiesHitsAs[index]){
            alert("Correct!");
            seventiesHitsQs[index] = "This question has already been answered. (Click okay.)";
            return true;
        }
        else{
            alert("Incorrect :(");
            seventiesHitsQs[index] = "This question has already been answered. (Click okay.)";
            return false;
        }}
    else if(category.toLowerCase() === "holidays"){
        if(holidaysQs[index] === "This question has already been answered. (Click okay.)"){
            return "no";
        }
        else if(response.toLowerCase() === holidaysAs[index]){
            alert("Correct!");
            holidaysQs[index] = "This question has already been answered. (Click okay.)";
            return true;
        }
        else{
            alert("Incorrect :(");
            holidaysQs[index] = "This question has already been answered. (Click okay.)";
            return false;
    }}
    else if(category.toLowerCase() === "american literature"){
        if(americanLiteratureQs[index] === "This question has already been answered. (Click okay.)"){
            return "no";
        }
        else if(response.toLowerCase() === americanLiteratureAs[index]){
            alert("Correct!");
            americanLiteratureQs[index] = "This question has already been answered. (Click okay.)";
            return true;
        }
        else{
           alert("Incorrect :(");
           americanLiteratureQs[index] = "This question has already been answered. (Click okay.)";
            return false;
    }}}


function choosePlayer(name, correctness){
    if(name === player1 && correctness === true){
        player1Total+= parseInt(cash);
        alert(player1+ ": $"+player1Total)
        return player1Total;
    }
    else if(name === player1 && correctness === false){
        player1Total-=parseInt(cash);
        alert(player1+ ": $"+player1Total)
        return player1Total;
    }
    else if(name === player2 && correctness === true){
        player2Total+=parseInt(cash);
        alert(player2+ ": $"+player2Total)
        return player2Total;
    }
    else if(name === player2 && correctness === false){
        player2Total-=parseInt(cash);
        alert(player2+ ": $"+player2Total)
        return player2Total;
    }
    else if(name === player3 && correctness === true){
        player3Total+=parseInt(cash);
        alert(player3+ ": $"+player3Total)
        return player3Total;
    }
    else if(name === player3 && correctness === false){
        player3Total-=parseInt(cash);
        alert(player3+ ": $"+player3Total)
        return player3Total;
    }
    else{

    }}

function displayDollars(){
    for(var items = 0; items < 5; items++){
        var dollars = ["200", "400", "600", "800", "1000"];
        document.write("<li>"+dollars[items]+"</li>");
    }}

function compareScores(score1, score2, score3){
    var winner = Math.max(score1, score2, score3);
    if(winner === score1){
        winnerName = player1;
        return player1;
    }
    else if(winner === score2){
        winnerName = player2;
        return player2;
    }
    else if(winner === score3){
        winnerName = player3;
        return player3;
}}



//Do/ While loop for amount of times it is run
//assign dollar values with true/false; true is available, false is unavailable
//send error message if false