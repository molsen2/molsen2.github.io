var firstRowQs= [];
var secondRowQs = [];
var thirdRowQs = [];
var fourthRowQs = [];
var fifthRowQs = [];
var sixthRowQs = [];

var player1Total; var player2Total; var player3Total;

alert("Hello contestants, welcome to this totally off-brand trivia game!")
alert("Choose three players and enter in their names!")

player1 = enterNames();
player2 = enterNames();
player3 = enterNames();

alert("You will have four categories today with six questions each. The categories are as follows..")
alert("Science, Seventies' Hits, Holidays, and American Literature. The dollar amounts range from $100-$600 and increase by $100 depending on the placement of the questions chosen.")
alert("There will be one Daily Double among the questions where you can wager at least $1,000.")
alert("Are we ready for some trivia? "+player1+ " choose your first question.");


//FUNCTIONS
function enterNames(){
    var name = prompt("Enter Player 1's Name");
    alert("Welcome "+name+"!");
}

