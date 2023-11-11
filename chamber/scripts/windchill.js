// let tempF = parseFloat(document.getElementById("temperature").textContent);
// let speed = parseFloat(document.getElementById("wind-speed").textContent);

function CalculateWindChill(tempF, speed) {
  if (tempF > 10 || speed < 4.8) return "N/A";
  let chill =
    35.74 +
    0.6215 * tempF -
    35.75 * speed ** 0.16 +
    0.4275 * tempF * speed ** 0.16;
  return `${chill.toFixed(2)}&deg;C`;
}

// document.getElementById("wind-chill").textContent = CalculateWindChill(
//   tempF,
//   speed
// );
