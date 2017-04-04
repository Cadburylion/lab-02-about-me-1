'use strict'; /* Do this for every JavaScript file for now on forever! */

var q1 = prompt('Do you think that I like programming?').trim().toLowerCase();
console.log('User answer: ' + q1 + '\nMy answer: yes' + '\nAnswered correctly: ' + (q1 == 'yes'));

var q2 = prompt('Have I ever been to Mexico?').trim().toLowerCase();
console.log('User answer: ' + q2 + '\nMy answer: no' + '\nAnswered correctly: ' + (q2 == 'no'));

var q3 = prompt('Am I over 6\' tall?').trim().toLowerCase();
console.log('User answer: ' + q3 + '\nMy answer: no' + '\nAnswered correctly: ' + (q3 == 'no'));

var q4 = prompt('Do I know C++ like the back of my hand?').trim().toLowerCase();
console.log('User answer: ' + q4 + '\nMy answer: no' + '\nAnswered correctly: ' + (q4 == 'no'));

var q5 = prompt('Do I own two beagles?').trim().toLowerCase();
console.log('User answer: ' + q5 + '\nMy answer: yes' + '\nAnswered correctly: ' + (q5 == 'yes'));
