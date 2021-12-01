/*var firstRowQs= ["When you open a bottle of wine and leave it exposed to the air, the ethanol in it reacts with oxygen. This reaction forms..."];
firstRowQs.push("The Doors got their name from a book written by this author.");
firstRowQs.push("Scholar and activist Dr. Maulana Karenga established this holiday in California in 1966.");
firstRowQs.push("In which U.S. state was the asylum of One Flew Over the Cuckoo's Nest located?");
var secondRowQs = ["This Saturn moon has a methane cycle, differentiating it from the other moons of the planet."];
var thirdRowQs = ["ATP, which stands for this, is the molecular unit of energy that gives our bodied fuel on a cellular level."];
var fourthRowQs = ["The study of optics has to do with..."];
var fifthRowQs = ["This refers to the amount of blood cells in a certain amount of blood."];
var sixthRowQs = ["This prominent Renaissance scientist is credited with the discovery of the pendulum."];*/

var science = ["When you open a bottle of wine and leave it exposed to the air, the ethanol in it reacts with oxygen. This reaction forms..."];
var seventieshitsQs = [];
var holidaysQs = [];
var americanliteratureQs = [];

var scienceAs = ["Ethanoic Acid"];
var seventieshitsAs = [];
var holidaysAs = [];
var americanLiteratureAs = [];

var player1Total; var player2Total; var player3Total;

alert("Hello contestants, welcome to this totally off-brand trivia game!")
alert("Choose three players and enter in their names!")

player1 = enterNames();
player2 = enterNames();
player3 = enterNames();

alert("You will have four categories today with six questions each. The categories are as follows..")
alert("Science, Seventies' Hits, Holidays, and American Literature. The dollar amounts range from $200-$1,000 and increase by $200 for each row of questions.")
alert("There will be one Daily Double among the questions where you can wager at least $1,000.")
alert("Are we ready for some trivia? "+player1+ ", choose your first question.");
var answer = chooseQ();
gradeAnswer(answer);

//FUNCTIONS
function enterNames(){
    var name = prompt("Enter Player Name");
    alert("Welcome "+name+"!");
    return name;
}

function chooseQ(){
    var category = prompt("Category?");
    var cash = prompt("Cash amount?");
    var spot = (cash/200)-1;
    if(category.toLowerCase() === "science"){
        var answer = prompt(science[spot]);
        return answer;
    }
    else if(category.toLowerCase() === "seventies' hits" || category.toLowerCase() === "seventies hits"){
        prompt(seventieshitsQs[spot]);
    }
    else if(category.toLowerCase() === "Holidays"){
        prompt(holidays[spot]);
    }
    else if(category.toLowerCase() === "American Literature"){
        prompt(americanLiterature[spot]);
    }
}

function gradeAnswer(response){
    if(response === scienceAs[0].toLowerCase()){
        console.log("Correct!");
    }

}

