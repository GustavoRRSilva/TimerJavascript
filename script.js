var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000; //quantos milesimos valem 1 segundo
var cron;

function Start() {
  cron = setInterval(() => {
    Timer();
  }, tempo);
}

function Pause() {
  clearInterval(cron);
}

function Stop() {
  clearInterval(cron);
   hh = 0;
   mm = 0;
   ss = 0;
   document.querySelector(".counter").innerText = '00:00:00';
}
function Timer() { 
    ss++;
    if(ss==60){
        ss = 0;
        mm++
        if(mm == 60){
            mm = 0;
            hh++;
        }
    }
    var format = (hh <10 ? '0' + hh : hh) + ':' + (mm <10 ? '0'+ mm : mm) + ':' + (ss < 10 ? '0' + ss:ss);
  document.querySelector(".counter").innerText = format;
}
