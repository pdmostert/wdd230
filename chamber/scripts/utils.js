

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

function setLastVisitDate() {
  localStorage.setItem("lastVisitDate", today);
}

function getDisplayMessage() {
  if (lastVisitDate === today) {
    return "Welcome back! You visited this page today.";
  } else {
    return `You last visited this page on ${lastVisitDate}.`;
  }
}
