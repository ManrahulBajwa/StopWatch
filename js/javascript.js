let hour = 0;
let min = 0;
let sec = 0;
let msec = 0;
let timer = false;

function start() {
    timer = true;
    stopwatch();
}
function st() {
    timer = false;
}
function restart() {
    timer = false;
    document.getElementById('hour').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('msec').innerHTML = "00";
}

function stopwatch() {
    if (timer == true) {
        msec = msec + 1;


        if (msec == 100) {
            sec = sec + 1;
            msec = 0;
        }
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hour = hour + 1;
            min = 0;
        }
        if (hour == 24) {
            hour = 0;
        }

        let msecStr = msec;
        let secStr = sec;
        let minStr = min;
        let hourStr = hour;

        if(msec < 10){
            msecStr = "0" + msec
        }
        if(sec < 10){
            secStr = "0" + sec
        }
        if(min < 10){
            minStr = "0" + min
        }
        if(hour < 10){
            hourStr = "0" + hour
        }
        

        document.getElementById('hour').innerHTML = hourStr;
        document.getElementById('min').innerHTML = minStr;
        document.getElementById('sec').innerHTML = secStr;
        document.getElementById('msec').innerHTML = msecStr;
        setTimeout("stopwatch()", 10);
    }



}