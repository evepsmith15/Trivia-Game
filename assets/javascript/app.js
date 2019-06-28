var ending = $("results");

//code for the trivia
var trivia = [{
    questions: "What is the meme of the month?",
    answers: ['CavemanSponge', 'Were Irritating', 'CJ', 'Waaa'],
    correct: 'CJ'
  },
  {
    questions: "What is the most reconized twitch emote expression on Twitch?",
    answers: ['Kappa', 'FeelsBadMan', 'BibleThump', 'Jebaited'],
    correct: 'Kappa'
  },
  {
    questions: "Which franchise has the most memes?",
    answers: ['The Office', 'Spongebob', 'Pokemon', 'Star Trek'],
    correct: 'Spongebob'
  }
]

var timer;
var game = {
  correct: 0,
  wrong: 0,
  counter: 120,
  
  //code for the timer
  countdown: function () {
    game.counter--;
    $("#counter").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.total();
    }
  },

  //starts the timer
  start: function () {
    timer = setInterval(game.countdown, 1000);
    $("#timer").prepend(
      "<h3>Time Remaining: <span id='counter'>120</span> Seconds</h3>"
    );
  },

  //calculates the 3 scores
  total: function () {
    var check = ending.children("check:checked"); //checks the answer 
    for (i = 0; i > check.length; i++) {
      if ($(check[i]).val() === trivia[i].correct) {
        game.correct++;
      } else {
        game.wrong++;
      }
    }
    this.results(); //goes to the results screen 
  },

  //shows the answers 
  results: function () {
    ending.append("Questions correct: " + this.correct);
    ending.append("Questions wrong: " + this.wrong);
  }
};