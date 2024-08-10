function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

function playSound(e) {
  const { keyCode } = e;
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`div[data-key="${keyCode}"]`);

  if (!audio) return;

  key.classList.toggle("playing");
  audio.currentTime = 0;
  audio.play();
}

const allKeys = Array.from(document.querySelectorAll(".key"));
allKeys.forEach((key) =>
  key.addEventListener("transitionend", removeTransition)
);
window.addEventListener("keydown", playSound);
