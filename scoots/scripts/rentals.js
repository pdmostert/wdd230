const tableBody = document.querySelector("#table-body");
const rentalsDataUrl = "data/scooters.json";

async function getScooters() {
  try {
    const response = await fetch(rentalsDataUrl);
    if (response.ok) {
      const data = await response.json();
      displayTable(data);
    } else {
      throw Error(await response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayTable(data) {
  data.scooters.forEach((rental) => {
    const row = document.createElement("tr");
      row.innerHTML = `
            <td><img src="${rental.imageSrc}" alt="${rental.imageAlt}" width="257" height="196" loading="lazy"></td>
            <td>${rental.description}</td>
            <td>${rental.capacity}</td>
            <td>${rental.reservation[0].price}</td>
            <td>${rental.reservation[1].price}</td>
            <td>${rental.walkIn[0].price}</td>
            <td>${rental.walkIn[1].price}</td>
        `;
    tableBody.appendChild(row);
  });
}

getScooters();
