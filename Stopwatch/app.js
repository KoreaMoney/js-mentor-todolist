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
