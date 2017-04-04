'use strict'; /* Do this for every JavaScript file for now on forever! */

console.log('Dasdasdas adsdas das.');

var sushi = prompt('Do you think I like sushi?');

if(sushi.trim().toLowerCase() == 'yes') {
  alert('You were correct.');
} else if(sushi.trim().toLowerCase() == 'no') {
  alert('WRONG!');
} else {
  alert('?????????');
}
