/*Write a JavaScript program where the program takes a random integer between
1 to 10, the user is then prompted to input a guess number.
If the user input matches with guess number, the program will display a message
"Good Work" otherwise display a message "Not matched"
*/

// Get a random integer from 1 to 10
var num = Math.ceil(Math.random() * 10);
var guessnum = prompt('Guess a number between 1 and 10');

if (guessnum == num){
  alert('Correct!');
}
  else{
    alert('Try again, the number was ' + num);
  }
