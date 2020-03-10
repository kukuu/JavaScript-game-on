//Author: Alexander Adu-Sarkodie
//Vanilla JavaScript orchestrated: Rock, Paper , Scissors game

//Caching DOM ELEMENTS to enhance Performance: re-usable core features/interactive elements:: DRY/SOLID

//setting defaults - Initialisation
let userScore = 0;
let computerScore = 0;

//Scores
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');

//domain features (ROCK, PAPER, SCISSORS)
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


//Computer Choice
function getComputerChoice(){
		const choices = ['r', 'p', 's'];
		//Build a random function and floor ot to get atomic numbers
		//console.log(Math.random() * 3)
		//Ensuring ATOMICITY
		//console.log(Math.floor(Math.random() * 3));
		const randomNumber = Math.floor(Math.random() * 3);
		return choices[randomNumber];
}


//Helper function: Converting  Array list [r,p,s] to words.
function convertToWord(letter){
	if(letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	else{return "Scissors"};
	
}


//WIN
function win(userChoice, computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	const userChoice_div = document.getElementById(userChoice);
//Refactored to use template strings from es6
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats   ${convertToWord(computerChoice)}${smallCompWord}.  You win (==)`;
// Enhancing user experience with glow effect. Run time decoration
	//document.getElementById(userChoice).classList.add('green-glow');
	userChoice_div.classList.add('green-glow');
	//Adding set timeout to remove the glow border. Avoid persistence
	//setTimeout(function(){console.log("Hello")}, 1000);
	//setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')}, 1000);
	//setTimeout(function(){userChoice_div.classList.remove('green-glow')}, 1000);
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 1000);
}


//LOSE
function lose(userChoice, computerChoice){
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to   ${convertToWord(computerChoice)}${smallCompWord}. You lost...==)`;
	//refactored
	//document.getElementById(userChoice).classList.add('green-glow');
	userChoice_div.classList.add('red-glow');
	//setTimeout(function(){userChoice_div.classList.remove('red-glow')}, 300);
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 1000);
}


//DRAW
function draw(userChoice, computerChoice){
	userScore++;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals  ${convertToWord(computerChoice)}${smallCompWord}. Its a draw!!`;
	userChoice_div.classList.add('gray-glow');
	//setTimeout(function(){userChoice_div.classList.remove('gray-glow')}, 300);
	setTimeout(() => userChoice_div.classList.remove('gray-glow'), 1000);
}



//HIGHER ORDER FUNCTION:: game() => Encapsulates and serves as Interface []
//getComputerChoice(), win(), draw() and lose()
function game(userChoice){

	const computerChoice = getComputerChoice();

	switch(userChoice + computerChoice){
		//combinations of user  WINS - ALGORITHM MATRIX
		case "rs":
		case "pr":
		case "sp":
		win(userChoice, computerChoice);
		break;

		//USER LOSES(computer wins) - note opposites of USER combinations
		//case values registered here are  listed for each iterative option above - ALGORITHM MATRIX
		case "rp":
		case "ps":
		case "sr":
		lose(userChoice, computerChoice);
		break;

		//Draws - ALGORITHM MATRIX
		case "rr":
		case "pp":
		case "ss":
		//console.log("It's a DRAW.")
		draw(userChoice, computerChoice);
		break;
	}
}

//Firing event listeners
function main(){

	//Add Event Listeners to the entities ROCK,PAPER, SCISSORS
	rock_div.addEventListener('click', () => {
		//console.log('Hey you clicked on rock');
		game("r"); //Execute and reference rock signature with ref. to game() function
	})

	paper_div.addEventListener('click', () => {
		game("p"); //EExecute and reference paper signature
	})

	scissors_div.addEventListener('click', () => {
		game("s"); //Execute and reference  scissors signature
	})
}

//Run parent function
main();