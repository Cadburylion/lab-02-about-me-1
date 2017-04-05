'use strict'; /* Do this for every JavaScript file for now on forever! */

//TODO: Prompt the user to guess the number 12 and they get 4 chances
var correctNum = 12;
var keepGoing = true;
for(var i = 0; i < 4 && keepGoing; i++) {
  var ans = prompt('Guess the magic number!');
  if(ans == correctNum) {
    keepGoing = false;
    console.log('correct');
  }
}


//Class 3 code demo: (all in my notebook also)

//DATA TYPES in JS
// Object
// Function
// Array

//Primitives
// Number
// String
// Boolean
// null
// undefined

var spen = 23.3 + 120;

spen *= 143;
spen /= 33;
spen -= 22;
spen += 2;
spen %= 42;

spen = Math.pow(spen, 4);
spen = Math.floor(234.34); //234
spen = Math.ceil(234.34); //235
spen = Math.round(234.40); // 234
spen = Math.round(234.5); //235

var happy = true;
happy = !happy;

null //means nothing
undefined //nothing has been set

/*
\n // return / new line
\t // tab
\\ // actual \
\' actual single quote
\" actual double quote
*/

var message = 'g\to to \'the\' st\nor\\e';
console.log(message);

message += ' \n go to the market';
console.log(message);

// if(condition) {
//   //run this chunk of code
// } else if (otherCondition) {
//   //run this other chunk of code
// } else {
//   //run this final chunk of code
// }






//Class 2 lab:

// var q1 = prompt('Do you think that I like programming?');
// if(q1 == '') { //trim() throws error when the user presses cancel
//   q1 = 'no input supplied';
// } else if(q1 !== null) { //Empty string if they just hit OK
//   q1 = q1.trim().toLowerCase();
// }
// console.log('User answer: ' + q1 + '\nMy answer: yes/n' + '\nAnswered correctly: ' + ((q1 == 'yes') || (q1 == 'y')));
//
// var q2 = prompt('Have I ever been to Mexico?');
// if(q2 == '') {
//   q2 = 'no input supplied';
// } else if(q2 !== null) {
//   q2 = q2.trim().toLowerCase();
// }
// console.log('User answer: ' + q2 + '\nMy answer: no/n' + '\nAnswered correctly: ' + ((q2 == 'no') || (q2 == 'n')));
//
// var q3 = prompt('Am I over 6\' tall?');
// if(q3 == '') {
//   q3 = 'no input supplied';
// } else if(q3 !== null) {
//   q3 = q3.trim().toLowerCase();
// }
// console.log('User answer: ' + q3 + '\nMy answer: no/n' + '\nAnswered correctly: ' + ((q3 == 'no') || (q3 == 'n')));
//
// var q4 = prompt('Do I know C++ like the back of my hand?');
// if(q4 == '') {
//   q4 = 'no input supplied';
// } else if(q4 !== null) {
//   q4 = q4.trim().toLowerCase();
// }
// console.log('User answer: ' + q4 + '\nMy answer: no/n' + '\nAnswered correctly: ' + ((q4 == 'no') || (q4 == 'n')));
//
// var q5 = prompt('Do I own two beagles?');
// if(q5 == '') {
//   q5 = 'no input supplied';
// } else if(q5 !== null) {
//   q5 = q5.trim().toLowerCase();
// }
// console.log('User answer: ' + q5 + '\nMy answer: yes/y' + '\nAnswered correctly: ' + ((q5 == 'yes') || (q5 == 'y')));
