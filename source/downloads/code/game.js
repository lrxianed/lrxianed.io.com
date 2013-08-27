var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if (computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}
 
var compare =function(choice1,choice2){
	//打成平手；
	if (choice1===choice2){
		var userChoice = prompt("The result is a tie!Please choose again.rock, paper or scissors?");
	}
	//选手出石头，电脑出剪刀；
	if (choice1==="rock"){
		if (choice2==="scissors"){
			return " You are rock,computer is scissors,You wins.";
		} else {
			return "You are rock,computer is paper,Computer wins.";
		}
	}
	//选手出布，电脑出石头；
	if (choice1==="paper"){
		if (choice2==="rock"){
			return "You are paper,computer is rock,You wins.";
		} else {
			return "You are paper,computer is scissors,Computer wins.";
		}
	}
	//选手出剪刀，电脑出石头；
	if (choice1==="scissors"){
		if (choice2==="rock"){
			return "You are scissors,computer is rock,Computer wins.";
		} else {
		return "You are scissors,computer is paper,sYou wins.";
		}
	}
};

compare (userChoice,computerChoice);
