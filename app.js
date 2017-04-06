'use strict'; /* Do this for every JavaScript file for now on forever! */

window.onload = function() { //Load the page before running the JS so it's not a white screen

  var theirName = prompt('What\'s your name?');
  var theirAns;
  var totalCorrect = 0;

  function question1Through5() {
  var questionArr = ['Do you think that I like programming?', 'Have I ever been to Mexico?', 'Am I over 6\' tall?', 'Do I know C++ like the back of my hand?', 'Do I own two beagles?'];
  var myAnswerArr = ['yes', 'no', 'no', 'no', 'yes'];


  for(var questionNumber = 0; questionNumber < questionArr.length; questionNumber++) {
    theirAns = prompt(questionArr[questionNumber]);
    if(!theirAns) { //Empty string if they just hit OK
      theirAns = '[no input supplied]';
    } else if(theirAns !== null) { //trim() throws error when the user presses cancel
      theirAns = theirAns.trim().toLowerCase();
    }

    var checkForBothAns = (theirAns == myAnswerArr[questionNumber]) || (theirAns == myAnswerArr[questionNumber].substring(0,1)); //Checks for yes/no and y/n

    if(checkForBothAns) {
      totalCorrect++;
    }

    console.log('Question number: ' + (questionNumber + 1) + '\nUser answer: ' + theirAns + '\nMy answer: ' + myAnswerArr[questionNumber] + '/' + myAnswerArr[questionNumber].substring(0,1) + '\nAnswered correctly: ' + (checkForBothAns));
  }
}
question1Through5();

  var questionsTriesAnswerArr = [['Can you guess the number I\'m thinking of between 0 and 25?', 4, Math.floor(Math.random() * 25)], ['What is one state I have been to besides Washington?', 6, ['oregon', 'california', 'arizona', 'new york']]];
  var running;
  var stringOfAttempts;
  var allowedTries;
  var myAns;
  var question;

function question6And7() {
  for(var questionNumber = 6; questionNumber < 8; questionNumber++) {
    running = true;
    stringOfAttempts = '';
    question = questionsTriesAnswerArr[questionNumber - 6][0];
    allowedTries = questionsTriesAnswerArr[questionNumber - 6][1];
    myAns = questionsTriesAnswerArr[questionNumber - 6][2];

    for(var theirTries = 0; theirTries < allowedTries && running; theirTries++) {
      theirAns = prompt(question);
      if(!theirAns) {
        theirAns = '[no input supplied]';
      } else if(theirAns !== null) {
        theirAns = theirAns.trim().toLowerCase();
      }

      var correct = false;
      if(myAns.toString().includes(theirAns)) {
        correct = true;
      }
      stringOfAttempts += theirAns + ' '; //Gather a long string of all their attempts to print in the console
      var output = 'Question number: ' + questionNumber + '\nUser answer(s): ' + stringOfAttempts + '\nMy answer: ' + myAns.toString() + '\nAnswered correctly: ' + correct + '\nTotal guesses: ' + (theirTries + 1);
      theirAns = parseInt(theirAns);

      if(correct) {
        alert('You guessed it,' + theirName + '! It took you ' + (theirTries + 1) + ' tries!');
        console.log(output);
        totalCorrect++;
        running = false;
      } else if(theirTries === allowedTries - 1) {
        alert('You ran out of tries, ' + theirName + '! Too bad.');
        console.log(output);
        running = false;
      } else if(theirAns == NaN || theirAns == null || theirAns == undefined) {
        alert('Incorrect input! You lost a try!');
      } else if(theirAns < myAns) {
        alert('Guess higher!');
      } else if (theirAns > myAns) {
        alert('Guess lower!');
      } else {
        alert('Nope, sorry! Try again!');
      }
    }
  }
}
question6And7();

  console.log(theirName + ' got ' + totalCorrect + ' out of 7 questions correct.');
  alert('Wow, ' + theirName + ', you got ' + totalCorrect + ' out of 7 questions correct.');
}
