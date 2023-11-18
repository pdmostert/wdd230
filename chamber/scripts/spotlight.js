const linksURL = "data/members.json";
const spotlight = document.querySelector("#spotlight");

async function getRadomeMembers() {
  try {
    const response = await fetch(linksURL);
    if (response.ok) {
      const data = await response.json();
      filterGoldAndSilverMembers(data);
    } else {
      throw Error(await response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

function filterGoldAndSilverMembers(members) {
  let goldAndSilverMembers = [];
  members.members.forEach((member) => {
    if (
      member.membershipLevel === "Gold" ||
      member.membershipLevel === "Silver"
    ) {
      goldAndSilverMembers.push(member);
    }
  });
  getThreeMembers(goldAndSilverMembers);
}

function getThreeMembers(members) {
  let randomMembers = new Set();
  while (randomMembers.size < 3) {
    let randomMember = Math.floor(Math.random() * members.length);
    randomMembers.add(randomMember);
  }
  randomMembers = Array.from(randomMembers).map((index) => members[index]);
  displayMembers(randomMembers);
}

function displayMembers(members) {
  members.forEach((member) => {
    let section = document.createElement("section");
    let companyName = document.createElement("h3");
    let companySlogan = document.createElement("p");
    let companyWebsite = document.createElement("a");
    section.setAttribute("class", "spotlight");

    companyName.textContent = member.companyName;
    companySlogan.textContent = `"${member.slogan}"`;
    companyWebsite.textContent = member.website;
    companyWebsite.setAttribute("href", member.website);
    companyWebsite.setAttribute("target", "_blank");

    section.appendChild(companyName);
    section.appendChild(companySlogan);
    section.appendChild(companyWebsite);
    spotlight.appendChild(section);
  });
}

getRadomeMembers();
