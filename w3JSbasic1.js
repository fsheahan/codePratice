/*
Write a JavaScript program to display the current day and time in the following format.
Today is : Friday.
Current time is : 4 PM : 50 : 22
*/

var dateNow = {
  date:new Date(),
  days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
  hours:0,
  minutes:0,
  seconds:0,
  day:"",
  displayTimeNow:function(){
    this.hours=this.date.getHours();
    if(this.hours>12){
      this.hours=(this.hours-12)+"PM";
    }
    else{
      this.hours=this.hours+"AM";
    }
    this.minutes=this.date.getMinutes();
    this.seconds=this.date.getSeconds();
    this.day=this.days[this.date.getDay()];
    console.log("Today is: "+ this.day);
    console.log("Current time is: "+ this.hours+":"+this.minutes+":"+this.seconds);
  }
};

dateNow.displayTimeNow();
