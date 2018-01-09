
var questions = [{
	question: "In the DC Universe what is the real name of the flash?",
	answers: ["Barry Allen", "Marc Spectre", "Hal Jordan", "Tony Stark"],
	correctAnswer: "0",
}, {
	question: "What is the name of the MLS team in Los Angeles?",
	answers: ["LA Kings", "LA Sounders", "LA Rams", "LA Galaxy"],
	correctAnswer: "3",
}, {
	question: "When did Disney purchase Marvel Entertainment?",
	answers: ["2004", "1999", "2006", "2009"],
	correctAnswer: "3",
}, {
	question: "In what year did lead singer of Nirvana Kurt Cobain die?",
	answers: ["1990", "1999", "1994", "1997"],
	correctAnswer: "2",
}, {
	question: "In the Harry Potter francise who is the main villan?",
	answers: ["Harry Potter", "Voldemort", "Lucius Malfoy", "Bellatrix Lestrange"],
	correctAnswer: "1",
}, {
	question: "Which musician did not die at age 27?",
	answers: ["Kurt Cobain", "Jimi Hendrix", "Jim Morrison", "Bob Marley"],
	correctAnswer: "Bob Marley",
}, {
	question: "In what year did Metallica release the And Justice For All album?",
	answers: ["1988", "2001", "1995", "1977"],
	correctAnswer: "1988",
}, {
	question: "In the HBO series Game of Thrones, who is referred to as the unburnt?",
	answers: ["Daenerys Targaryen" , "Tywin Lannister", "Roose Bolton", "Stannis Baratheon "],
	correctAnswer: "Daenerys Targaryen",
}];


var timer;
var userGuess;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unAnswered = 0;
var choicesArr = questions[0]["answers"];
var currentQuestion = 0;
var gameCounter = 30;
var currentAnswers = 0;



$("#next_button").hide();

// 	$(document).ready(function() {
// 	gameCounter--;
// 	$("#timer").text(gameCounter);
// 	if (gameCounter === 0) {
// 		console.log("TIMES UP");
// 		game.done();
// 	}
// });


$("#start_button").click(function() {
	$("#start_button").hide();
	$("#next_button").show();
	$("#main_div").html(questions[currentQuestion]["question"]);

	for (let i = 0; i < choicesArr.length; i++) {
		var button = $('<button>');
		button.text(choicesArr[i]);
		button.attr('data-id', i);
		$('#choices_div').append(button);
	}
	$('#choices_div').on('click', 'button', function(e){
		userPick = $(this).attr("data-id");

		if(userPick != questions[currentQuestion]["correctAnswer"]) {
			$("#choices_div").hide();
			incorrectAnswer++;

		} else if (userPick === questions[currentQuestion]["correctAnswer"]) {
			$("#choices_div").hide();
			correctAnswer++;

		}
		$("#next_button").click(function() {
			currentQuestion = currentQuestion + 1;
			choicesArr++;
			$("#choices_div").show();
			$("#main_div").html(questions[currentQuestion]["question"]);

		});
		$("#correct").text(correctAnswer);
		$("#incorrect").text(incorrectAnswer);
	});


});
