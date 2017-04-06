'use strict'; /* Do this for every JavaScript file for now on forever! */

var totalCorrect = 0;
var questionArr = ['Do you think that I like programming?', 'Have I ever been to Mexico?', 'Am I over 6\' tall?', 'Do I know C++ like the back of my hand?', 'Do I own two beagles?'];
var myAnswerArr = ['yes', 'no', 'no', 'no', 'yes'];

for(var questionNumber = 0; questionNumber < questionArr.length; questionNumber++) {
  var theirAns = prompt(questionArr[questionNumber]);
  if(!theirAns) { //Empty string if they just hit OK
    theirAns = 'no input supplied';
  } else if(theirAns !== null) { //trim() throws error when the user presses cancel
    theirAns = theirAns.trim().toLowerCase();
  }

  var checkForBothAns = (theirAns == myAnswerArr[questionNumber]) || (theirAns == myAnswerArr[questionNumber].substring(0,1)); //Checks for yes/no and y/n

  if(checkForBothAns) {
    totalCorrect++;
  }

  console.log('Question number: ' + (questionNumber + 1) + '\nUser answer: ' + theirAns + '\nMy answer: ' + myAnswerArr[questionNumber] + '/' + myAnswerArr[questionNumber].substring(0,1) + '\nAnswered correctly: ' + (checkForBothAns));
}

questionNumber++;
var allowedTries = 4;
var question6 = 'Can you guess the number I\'m thinking of between 0 and 25?';
var myAns = Math.floor(Math.random() * 25);
var running = true;
var theirAnsTo6 = '';
var stringOfAttempts = '';

for(var theirTries = 0; theirTries < allowedTries && running; theirTries++) {
  theirAnsTo6 = prompt(question6);
  if(!theirAnsTo6) {
    theirAnsTo6 = 'no input supplied';
  } else if(theirAnsTo6 !== null) {
    theirAnsTo6 = theirAnsTo6.trim().toLowerCase();
  }

  stringOfAttempts += theirAnsTo6 + ' '; //Gather a long string of all their attempts to print in the console
  var output = 'Question number: ' + questionNumber + '\nUser answer(s): ' + stringOfAttempts + '\nMy answer: ' + myAns + '\nAnswered correctly: ' + ((theirAnsTo6 == myAns) || (theirAnsTo6 == myAns)) + '\nTotal guesses: ' + (theirTries + 1);
  theirAnsTo6 = parseInt(theirAnsTo6);

  if(theirAnsTo6 === myAns) {
    alert('You guessed it! It took you ' + (theirTries + 1) + ' tries!');
    console.log(output);
    totalCorrect++;
    running = false;
  } else if(theirTries === allowedTries - 1) {
    alert('You ran out of tries! Too bad.');
    console.log(output);
    running = false;
  } else if(theirAnsTo6 === NaN) {
    alert('You didn\'t guess a number!');
  } else if(theirAnsTo6 < myAns) {
    alert('Guess higher!');
  } else if (theirAnsTo6 > myAns) {
    alert('Guess lower!');
  } else {
    alert('Incorrect input! You lost a try!');
  }
}

questionNumber++;



console.log('User got ' + totalCorrect + ' out of 7 questions correct.');
alert('You got ' + totalCorrect + ' out of 7 questions correct.');
