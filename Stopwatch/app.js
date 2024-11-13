const addTrailingZero = (number) => {
  return number < 10 ? `0${number}` : number;
};

const updateTime = () => {
  const time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let am = hours >= 12 ? "PM" : "AM"; // am > pm
  let pm = hours >= 12 ? "AM" : "PM"; // pm > am

  hours = hours % 12 || 12; // CONVERTING 24 HOURS TO 12 HOURS

  hours = addTrailingZero(hours);
  minutes = addTrailingZero(minutes);
  seconds = addTrailingZero(seconds);

  $("#hour").html(hours);
  $("#min").html(minutes);
  $("#sec").html(seconds);
  $("#am").html(am);
  $("#pm").html(pm);
};

updateTime();

setInterval(updateTime, 1000); // UPDATE TIME EVERY SECOND

/**
 * Stopwatch
 */
let stopwatchHours = 0,
  stopwatchMinutes = 0,
  stopwatchSeconds = 0,
  stopwatchMillisecond = 0,
  stopwatchRunning = false,
  laps = 0,
  stopwatchInterval;

const stopwatch = () => {
  stopwatchMillisecond++;

  if (stopwatchMillisecond === 100) {
    stopwatchSeconds++;
    stopwatchMillisecond = 0;
  }

  if (stopwatchSeconds === 60) {
    stopwatchMinutes++;
    stopwatchSeconds = 0;
  }

  if (stopwatchMinutes === 60) {
    stopwatchHours++;
    stopwatchMinutes = 0;
  }

  $("#stopwatch-hour").html(addTrailingZero(stopwatchHours));
  $("#stopwatch-min").html(addTrailingZero(stopwatchMinutes));
  $("#stopwatch-sec").html(addTrailingZero(stopwatchSeconds));
  $("#stopwatch-ms").html(addTrailingZero(stopwatchMillisecond));
};

const startStopwatch = () => {
  if (!stopwatchRunning) {
    stopwatchInterval = setInterval(stopwatch, 10);
    stopwatchRunning = true;
  }
};

const pauseStopwatch = () => {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
};

const resetStopwatch = () => {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
  stopwatchHours = 0;
  stopwatchMinutes = 0;
  stopwatchSeconds = 0;
  stopwatchMillisecond = 0;
  laps = 0;
  $("#stopwatch-hour").html("00");
  $("#stopwatch-min").html("00");
  $("#stopwatch-sec").html("00");
  $("#stopwatch-ms").html("00");
};

$(".start-stopwatch").click(() => {
  startStopwatch();
  $(".start-stopwatch").hide();
  $(".lap-stopwatch").show();
});

$(".reset-stopwatch").click(() => {
  resetStopwatch();
  $(".start-stopwatch").show();
  $(".lap-stopwatch").hide();
});
