/*Write a JavaScript program to find which January 1 is a Sunday between 2014 and 2050.
*/
for (var year = 2014; year <= 2050; year++){
  var d = new Date(year, 0, 1);
  if ( d.getDay() === 0 )
  console.log("January 1st is a Sunday on "+year);
    }
