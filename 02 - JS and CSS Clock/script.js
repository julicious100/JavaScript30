const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();

  const secDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secDegrees}deg)`;

  const minDegrees = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minDegrees}deg)`;

  const hourDegree = (hours / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${hourDegree}deg)`;
}

const sync = () => {
  setDate();
  setInterval(setDate, 1000);
};

setDate();
setTimeout(sync, 1000 - (Date.now() % 1000));
