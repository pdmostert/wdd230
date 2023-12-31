const today = Date.now();
//const today = Date.parse("2023-10-20 21:00:00");
const lastVisit = document.querySelector("#last-visit");
let lastVisitDate = new Date();
getLastVisitDate();

function getLastVisitDate() {
  if (localStorage.getItem("lastVisitDate") === null) {
    setVisitMessage(-1);
    lastVisitDate = today;
    setLastVisitDate();
  } else {
    lastVisitDate = localStorage.getItem("lastVisitDate");
    setVisitMessage(daysSinceLastVisit());
    setLastVisitDate();
  }
}

function setVisitMessage(daysSince) {
  let message = "";
  if (daysSince < 0) {
    message = "Welcome! Let us know if you have any questions.";
  } else if (daysSince < 1) {
    message = "Back so soon! Awesome!";
  } else if (daysSince === 1) {
    message = `You last visited ${daysSince} day ago.`;
  } else {
    message = `You last visited ${daysSince} days ago.`;
  }
  lastVisit.textContent = message;
}

function daysSinceLastVisit() {
  const oneDay = 24 * 60 * 60 * 1000;
  const daysSince = Math.round(Math.abs((today - lastVisitDate) / oneDay));
  return daysSince;
}
