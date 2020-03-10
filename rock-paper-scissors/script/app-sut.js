
module.exports = function(user, comp){
	//both user and comp players play same thing
	//userChoice = user, compChoice = comp
	if(user === comp){
		return 'draw';
	}


	//Condition where "user" wins
	if((user === 'rr' && comp === 'rp') ||
		(user === 'pr' && comp === 'ps') ||
		(user === 'sp' && comp === 'sr') ){
		return "user";
	}

	return false;
	//return 'comp' //When computer wins
}