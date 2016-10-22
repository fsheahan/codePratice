/*Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
*/

year = window.prompt("Enter a year to see if it's a leap year: ");
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
alert(x);
