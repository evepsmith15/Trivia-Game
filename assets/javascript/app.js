//code for the timer
var countdown = new Date("60").getTime();
var t = setInterval(function() {
  var now = new Date().getTime();
  var distance = countdown - now;
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML = seconds + "s ";
  if (distance < 0) {
    clearInterval(t);
    document.getElementById("timer").innerHTML = "TIMES UP";
  }
}, 60000);

//code for the quiz button 
const ResultsContainer = document.getElementById('Results');
const SubmitButton = document.getElementById('Submit');
//code for answering the questions 

SubmitButton.addEventListener('click', Results);
var Correct = 0;
//correct answers: CJ, Kappa, Spongebob 
//if (Answers === 
