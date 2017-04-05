'use strict'; /* Do this for every JavaScript file for now on forever! */

var totalCorrect = 0;
var qArr = [prompt('Do you think that I like programming?'), prompt('Have I ever been to Mexico?'), prompt('Am I over 6\' tall?'), prompt('Do I know C++ like the back of my hand?'), prompt('Do I own two beagles?')];
var myAnswers = ['yes', 'no', 'no', 'no', 'yes'];

for(var question = 0; question < qArr.length; question++) {
  if(!qArr[question]) { //trim() throws error when the user presses cancel
    qArr[question] = 'no input supplied';
  } else if(qArr[question] !== null) { //Empty string if they just hit OK
    qArr[question] = qArr[question].trim().toLowerCase();
  }
  if(qArr[question] === myAnswers[question]) {
    totalCorrect++;
  }
  console.log('Question number: ' + question + '\nUser answer: ' + qArr[question] + '\nMy answer: ' + myAnswers[question] + '/' + myAnswers[question].substring(0,1) + '\nAnswered correctly: ' + ((qArr[question] == myAnswers[question]) || (qArr[question] == myAnswers[question].substring(0,1))));
}

var allowedTries = 4;
var q6 = 'What number is in my head?';
var myAns = 8;
var running = true;
var theirAns = '';
var stringOfTries = '';

for(var theirTries = 0; theirTries < allowedTries && running; theirTries++) {
  theirAns = prompt(q6);
  if(!theirAns) { //trim() throws error when the user presses cancel
    theirAns = 'no input supplied';
  } else if(theirAns !== null) { //Empty string if they just hit OK
    theirAns = theirAns.trim().toLowerCase();
  }

  for(var combine = 0; combine < theirAns.length; combine++) {
    stringOfTries += theirAns[combine] + ' ';
  }

  if(parseInt(theirAns) === myAns) {
    console.log('Question number: 6\nUser answer(s): ' + stringOfTries + '\nMy answer: ' + myAns + '\nAnswered correctly: ' + ((theirAns == myAns) || (theirAns == myAns)) + '\nTotal guesses: ' + (theirTries + 1));
    running = false;
    totalCorrect++;
  } else if(theirTries == allowedTries - 1) {
    alert('You ran out of tries! Too bad.');
    console.log('Question number: 6\nUser answer(s): ' + stringOfTries + '\nMy answer: ' + myAns + '\nAnswered correctly: ' + ((theirAns == myAns) || (theirAns == myAns)) + '\nTotal guesses: ' + (theirTries + 1));
    running = false;
  } else if(parseInt(theirAns) === NaN) {
    alert('You didn\'t guess a number');
  } else if(parseInt(theirAns) < myAns) {
    alert('Guess higher!');
  } else if (parseInt(theirAns) > myAns) {
    alert('Guess lower!');
  } else {
    alert('Incorrect input! You lost a try!');
  }
}

alert('You got ' + totalCorrect + ' out of 7 questions correct.');
