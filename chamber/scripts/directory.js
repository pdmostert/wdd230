const linksURL = "data/members.json";
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");
const display = document.querySelector("member-list");

async function getMembers() {
  try {
    const response = await fetch(linksURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayMembers(data);
    } else {
      throw Error(await response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayMembers(members) {
  members.members.forEach((member) => {
    let section = document.createElement("section");
    let companyName = document.createElement("h2");
    let companyAddress = document.createElement("p");
    let companyPhone = document.createElement("p");
    let companyWebsite = document.createElement("a");
    let logo = document.createElement("img");
    section.setAttribute("class", "card");

    companyName.textContent = member.companyName;
    companyAddress.textContent = member.companyAddress;
    companyPhone.textContent = member.companyPhone;
    companyWebsite.textContent = member.website;
    companyWebsite.setAttribute("href", member.website);
    companyWebsite.setAttribute("target", "_blank");
    logo.setAttribute("src", member.logo.imageName);
    logo.setAttribute("alt", member.logo.imageAlt);

    section.appendChild(companyName);
    section.appendChild(companyAddress);
    section.appendChild(companyPhone);
    section.appendChild(companyWebsite);
    section.appendChild(logo);

    document.querySelector("#member-list").appendChild(section);
  });
}

getMembers();

gridBtn.addEventListener("click", () => {
  document.querySelector("#member-list").classList.remove("list");
  document.querySelector("#member-list").classList.add("grid");
});

listBtn.addEventListener("click", () => {
  document.querySelector("#member-list").classList.remove("grid");
  document.querySelector("#member-list").classList.add("list");
});
