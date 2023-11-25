const scooterSelect = document.querySelector('#scooter');
const rentalsDataUrl = "data/scooters.json";

async function getScootersSelectData() {
  try {
    const response = await fetch(rentalsDataUrl);
    if (response.ok) {
      const data = await response.json();
      loadSelectInput(data);
    } else {
      throw Error(await response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

function loadSelectInput(data) {
    data.scooters.forEach((rental) => {
        const option = document.createElement('option');
        option.value = rental.id;
        option.textContent = rental.description;
        scooterSelect.appendChild(option);
     });
}


getScootersSelectData();