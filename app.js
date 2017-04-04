'use strict'; /* Do this for every JavaScript file for now on forever! */

var q1 = prompt('Do you think that I like programming?');
if(q1 == '') { //trim() throws error when the user presses cancel
  q1 = 'no input supplied';
} else if(q1 !== null) { //Empty string if they just hit OK
  q1 = q1.trim().toLowerCase();
}
console.log('User answer: ' + q1 + '\nMy answer: yes/n' + '\nAnswered correctly: ' + ((q1 == 'yes') || (q1 == 'y')));

var q2 = prompt('Have I ever been to Mexico?');
if(q2 == '') {
  q2 = 'no input supplied';
} else if(q2 !== null) {
  q2 = q2.trim().toLowerCase();
}
console.log('User answer: ' + q2 + '\nMy answer: no/n' + '\nAnswered correctly: ' + ((q2 == 'no') || (q2 == 'n')));

var q3 = prompt('Am I over 6\' tall?');
if(q3 == '') {
  q3 = 'no input supplied';
} else if(q3 !== null) {
  q3 = q3.trim().toLowerCase();
}
console.log('User answer: ' + q3 + '\nMy answer: no/n' + '\nAnswered correctly: ' + ((q3 == 'no') || (q3 == 'n')));

var q4 = prompt('Do I know C++ like the back of my hand?');
if(q4 == '') {
  q4 = 'no input supplied';
} else if(q4 !== null) {
  q4 = q4.trim().toLowerCase();
}
console.log('User answer: ' + q4 + '\nMy answer: no/n' + '\nAnswered correctly: ' + ((q4 == 'no') || (q4 == 'n')));

var q5 = prompt('Do I own two beagles?');
if(q5 == '') {
  q5 = 'no input supplied';
} else if(q5 !== null) {
  q5 = q5.trim().toLowerCase();
}
console.log('User answer: ' + q5 + '\nMy answer: yes/y' + '\nAnswered correctly: ' + ((q5 == 'yes') || (q5 == 'y')));
