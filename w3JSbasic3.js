/* Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/
var today = new Date();
var dd = today.getDate();
//getMonth is an integer between 0 and 11; 0 = January, 1 = February, etc.
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd<10){
  dd='0'+dd;
}
if(mm<10){
  mm='0'+mm;
} 

today = mm+'-'+dd+'-'+yyyy;
console.log(today);
today = mm+'/'+dd+'/'+yyyy;
console.log(today);
today = dd+'-'+mm+'-'+yyyy;
console.log(today);
today = dd+'/'+mm+'/'+yyyy;
console.log(today);
