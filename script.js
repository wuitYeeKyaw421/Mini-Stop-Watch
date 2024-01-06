let timevaluetag = document.querySelector(".timevalue");
let millisecondtag = document.querySelector(".millisecond");
let startbuttontag = document.querySelector(".start");
let pausebuttontag = document.querySelector(".pause");
let continuebuttontag = document.querySelector(".continue");
let restartbuttontag = document.querySelector(".restart");
let clearbuttontag = document.querySelector(".clear");

let hour = 0,
  minute = 0,
  second = 0,
  millisecond = 0;

let starttime = () => {
  millisecond += 1;
  if (millisecond === 100) {
    millisecond = 0;
    second += 1;
  }
  if (second === 60) {
    second = 0;
    minute += 1;
  }
  if (minute === 60) {
    minute = 0;
    hour += 1;
  }
  let millisecondtext =
    millisecond < 100 ? "0" + millisecond.toString() : millisecond;
  let secondtext = second < 10 ? "0" + second.toString() : second;
  let minutetext = minute < 10 ? "0" + minute.toString() : minute;
  let hourtext = hour < 10 ? "0" + hour.toString() : hour;
  timevaluetag.textContent = hourtext + ":" + minutetext + ":" + secondtext;
  millisecondtag.textContent = millisecondtext;
};

let start;

/* ===== START BUTTON ===== */
startbuttontag.addEventListener("click", () => {
  clearInterval(start);
  start = setInterval(starttime, 10);
});

/* ===== PAUSE BUTTON ===== */
pausebuttontag.addEventListener("click", () => {
  clearInterval(start);
});

/* ===== CONTINUE BUTTON ===== */
continuebuttontag.addEventListener("click", () => {
  clearInterval(start);
  start = setInterval(starttime, 10);
});

/* ===== RESTART BUTTON ===== */
restartbuttontag.addEventListener("click", () => {
  millisecond = 0;
  second = 0;
  minute = 0;
  hour = 0;
  clearInterval(start);
  start = setInterval(starttime, 10);
});

/* ===== CLEAR BUTTON ===== */
clearbuttontag.addEventListener("click", () => {
  clearInterval(start);
  timevaluetag.textContent = "00:00:00";
  millisecondtag.textContent = "000";
});
