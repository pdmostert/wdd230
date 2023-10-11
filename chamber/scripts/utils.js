const slider = document.querySelector("input");
slider.onclick = DarkMode;

function DarkMode() {
  const element = document.body;
  if (slider.checked) {
    element.classList.toggle("dark-mode");
  } else {
    element.classList.remove("dark-mode");
  }
}
