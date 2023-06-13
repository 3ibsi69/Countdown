const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
days.innerHTML = "00";
hours.innerHTML = "00";
minutes.innerHTML = "00";
seconds.innerHTML = "00";
let interval;
let totalSeconds = 0;

function update() {
  const sec = totalSeconds % 60;
  const min = Math.floor(totalSeconds / 60) % 60;
  const hour = Math.floor(totalSeconds / 3600) % 24;
  const day = Math.floor(totalSeconds / 3600 / 24);

  days.innerHTML = formatTime(day);
  hours.innerHTML = formatTime(hour);
  minutes.innerHTML = formatTime(min);
  seconds.innerHTML = formatTime(sec);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

start.addEventListener("click", function () {
  clearInterval(interval);
  interval = setInterval(function () {
    totalSeconds++;
    update();
  }, 1000);
});

stop.addEventListener("click", function () {
  clearInterval(interval);
});

reset.addEventListener("click", function () {
  clearInterval(interval);
  totalSeconds = 0;
  update();
});
