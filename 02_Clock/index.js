const second = document.querySelector(".sec");
const minute = document.querySelector(".min");
const hour = document.querySelector(".hour");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secRotationDeg = (seconds / 60) * 360 -90;

  const minutes = now.getMinutes();
  const minRotatingDeg = (minutes / 60) * 360 -90;

  const hours =now.getHours();
  const hourRotatingDeg = (hours/12) *360 -90;

  second.style.transform = `rotate(${secRotationDeg}deg)`;
  minute.style.transform = `rotate(${minRotatingDeg}deg)`;
  hour.style.transform = `rotate(${hourRotatingDeg}deg)`;
}

setInterval(setDate, 1000);
setDate();
