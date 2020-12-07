const chalk = require('chalk');
var readlineSync = require("readline-sync");
var score=0
var userName = readlineSync.question(chalk.cyan("May I have your name? = "));
console.log(chalk.blue("------------"));
console.log(chalk.yellow("!! Welcome",userName,"!!"));
console.log(chalk.blue("------------"))
console.log("This is a quiz which will test your knowledge of the sitcom Brooklyn Nine-Nine. Play to find out if you're a true fan !")
console.log(chalk.blue("-----------"))


function play(question,answer){
var userAnswer=readlineSync.question(question);

if(answer==userAnswer){
  console.log(chalk.green("correct!"))
  score=score+ 1
  console.log(score)
}else {
  console.log(chalk.red("wrong!"))
}

console.log(chalk.blue("----------"))
}

var questions = [
	{
		question: `
	1."Who said this? ' If I die, turn my tweets into a book'"(enter option example: a,b,c)
	a: Amy
	b: Jake
	c: Boyle
    d: Gina \n`,
		answer: "d"
	},
	{
		question: `
	2.What is Jake's favorite Movie?(enter option example: a,b,c)
	a: Star Wars
	b: Die Hard
    c: Indiana Jones
    d: Armageddon\n`,
		answer: "b"
	},
	{
		question: `
	3.Cheddar is the name of whose dog?
	a: Captain Holt
	b: Jake
	c: Boyle
	d: Rosa\n`,
		answer: "a"
	},
	{
		question: `
	4.What is The Vulture's real name?
	a: Seth Dozerman
	b: Detective Pembroke
	c: Detective Podolski
    d: Agent Kendrick\n`,
		answer: "b"
	}
];

for(var i=0;i<questions.length;i++){
  var currentQuestion = questions[i]
  play(currentQuestion.question,currentQuestion.answer)

}

console.log("your total score :"+" "+score+"/4")