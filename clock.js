let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
var milliSeconds = document.querySelector(".milliseconds");


let start = document.querySelector(".start")
let stop = document.querySelector(".stop")
let reset = document.querySelector(".reset")

var milliUnit = 0;
var secondUnit = 0;
var minutUnit = 0;
var hourUnit = 0;
var zero = 0
let interval;

function starting() {
   interval=setInterval(() => { timer(); }, 1);
}



function stopping() {
  clearInterval(interval); 
}



function reseting() {
  stopping() 

  milliUnit = 0;
  secondUnit = 0;
  minutUnit = 0;
  hourUnit = 0;
  seconds.innerHTML = "00";
  minutes.innerHTML =" 00";
  hours.innerHTML = "00";
  milliSeconds.innerHTML = "000"
 
}


function timer(){

      milliSeconds.innerHTML = ++milliUnit;
      if (milliSeconds.innerHTML == 1000) {
        seconds.innerHTML = ++secondUnit;

        if (seconds.innerHTML == 60) {
          minutes.innerHTML = ++minutUnit;

          return secondUnit = 0 , milliUnit = 0;
        }
  
        if (minutes.innerHTML == 60) {
          hours.innerHTML = ++minutUnit;
          return minutUnit = 0 , secondUnit = 0 , milliUnit = 0;;
        }
        return milliUnit = 0
      }
  
    }






 


