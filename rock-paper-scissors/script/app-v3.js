//Author: Alexander Adu-Sarkodie
//Vanilla JavaScript orchestrated Rock, Paper , Scissors game

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

//domain propeeties (ROCK, PAPER, SCISSORS)
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

//getComputerChoice();

//console.log(getComputerChoice());


//Helper function: Converting to output  Array list r,p,s to words.

function convertToWord(letter){
	if(letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	else{return "Scissors"};
	
}


function win(userChoice, computerChoice){
	userScore++;
	//console.log(userScore);
	//console.log("WIN");
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();

	//result_p.innerHTML = userChoice + " beats " + computerChoice +  ". You win $$$££!"
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats   ${convertToWord(computerChoice)}${smallCompWord}.  You win (==)`;
}


function lose(userChoice, computerChoice){
	computerScore++;
	//console.log(computerScore);
	//console.log("LOST");
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();

	//result_p.innerHTML = userChoice + " beats " + computerChoice +  ". You win $$$££!"
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to   ${convertToWord(computerChoice)}${smallCompWord}. You lost...==)`;

	//console.log("LOST");
}


function draw(userChoice, computerChoice){
	
	userScore++;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();

	//result_p.innerHTML = userChoice + " beats " + computerChoice +  ". You win $$$££!"
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals  ${convertToWord(computerChoice)}${smallCompWord}. Its a draw!!`;

	

	//console.log("DRAW");
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
		win(userChoice, computerChoice);
		break;

		//USER LOSES(computer wins) - note opposites of USER combinations
		//Not listed for each ierative option above - ALGORITHM
		case "rp":
		case "ps":
		case "sr":
		//console.log("USER LOSES");
		lose(userChoice, computerChoice);
		break;

		//Draws - ALGORITHM
		case "rr":
		case "pp":
		case "ss":
		//console.log("It's a DRAW.")
		draw(userChoice, computerChoice);
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