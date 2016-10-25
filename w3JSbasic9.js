/*Write a JavaScript program to calculate number of days left until next
Christmas.
*/
function countDownFrom(mm,dd){
  if(mm <= 12 && mm >0){
    var today = new Date();
    var countingDate = new Date(today.getFullYear(),mm - 1,dd);
    var countDown = Math.ceil((countingDate - today) / (1000 * 60 * 60 * 24));
    alert(countDown + " days till " + mm + "/" + dd);
  }
  else{
    alert("Not a valid date");
  }
}

countDownFrom(12,25); //Input date here
