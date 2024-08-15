const planes = document.querySelectorAll(".panel");

function handleClick(e) {
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}



planes.forEach((panel, i) => {
  return panel.addEventListener("click", handleClick);
});

planes.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);



