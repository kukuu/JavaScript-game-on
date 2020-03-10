//console.log("Hey");

//Enhancing Performance: Caching properties and DOM elements::DRY/SOLID


//CACHING DOM ELEMENTS

//setting defaults - Initialisation
let userScore = 0;
let computerScore = 0;

//Scores
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');

//domain properties (ROCK, PAPER, SCISSORS)
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


//Computer Choice
function getComputerChoice(){
		const choices = ['r', 'p', 's'];
		//Build a random function and floor ot to get atomic numbers
		//console.log(Math.random() * 3)
		//console.log(Math.floor(Math.random() * 3));
		const randomNumber = Math.floor(Math.random() * 3);
		return choices[randomNumber];
}

//console.log(getComputerChoice());


function win(){
	userScore++
	//console.log(userScore);
	//console.log("WIN");
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = userChoice + " beats " + computerChoice +  ". You win $$$££!"
}


function lose(){
	console.log("LOST");
}


function draw(){
	console.log("DRAW");
}



//Evaluate game()
function game(userChoice){
	//console.log('):  ):   ): ' + userChoice)

	const computerChoice = getComputerChoice();

	//console.log('user choice => ' + userChoice);
	//console.log('computer choice => ' + computerChoice);

	switch(userChoice + computerChoice){
		//combinations of user  WINS - ALGORITHM
		case "rs":
		case "pr":
		case "sp":
		//console.log("USER WINS.")
		win();
		break;

		//USER LOSES(computer wins) - note opposites of USER combinations
		//Not listed for each ierative option above - ALGORITHM
		case "rp":
		case "ps":
		case "sr":
		//console.log("USER LOSES");
		lose();
		break;

		//Draws - ALGORITHM
		case "rr":
		case "pp":
		case "ss":
		//console.log("It's a DRAW.")
		draw();
		break;

	}

}

//game('c');

function main(){

	//Add Event Listeners to the entities ROCK,PAPER, SCISSORS
	rock_div.addEventListener('click', () => {
		//console.log('Hey you clicked on rock');
		game("r"); //Execute rock signature with ref. to game() function
	})

	paper_div.addEventListener('click', () => {
		//console.log('Hey you clicked on paper');
		game("p"); //Execute paper signature
	})

	scissors_div.addEventListener('click', () => {
		//console.log('Hey you clicked on scissors');
		game("s"); //Execute scissors signature
	})
}

//Run parent function
main();