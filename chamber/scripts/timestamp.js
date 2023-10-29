function setTimestamp() {
  const timestamp = document.getElementById("timestamp");
  let currentTimestamp = new Date().getTime();
  timestamp.innerHTML = currentTimestamp;
}

setTimestamp();