let [seconds, minutes, hours] = [0, 0, 0];
let displaytime = document.getElementById("display-time");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let timer = null;
start.addEventListener("click", watchstart);
stop.addEventListener("click", watchstop);
reset.addEventListener("click", watchreset);

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  displaytime.innerHTML = h + ":" + m + ":" + s;
}
function watchstart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}
function watchstop() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
}
function watchreset() {
  clearInterval(timer);
  displaytime.innerHTML = "00:00:00";
}
