export function getMembers() {
  return fetch("data/members.json")
    .then(response => response.json())
    .catch(error => {
      console.error("Error fetching members:", error);
      return [];
    });
}

export function displaySpotlight(members) {
  const container = document.querySelector(".spotlight");
  if (!container) return;

  members
    .sort(() => 0.5 - Math.random()) // Shuffle
    .slice(0, 3)                     // Take first 3
    .forEach(member => {             // Loop over them
      const memberCard = document.createElement("div");
      memberCard.classList.add("member-card");

      memberCard.innerHTML = `
        <h3>${member.name}</h3>
        <p>${member.year}</p>
        <p> <strong>Clubs:</strong> ${member.clubs}
        <p><strong> Current Job:</strong> ${member.role}</p>
      `;

      container.appendChild(memberCard);
    });
}


export function displayMembers(members) {
  const container = document.querySelector(".members");
  if (!container) return;

  members.forEach(member => {
      const memberCard = document.createElement("div");
      memberCard.classList.add("member-card");

      memberCard.innerHTML = `
        <h3>${member.name}</h3>
        <p>${member.year}</p>
        <p> <strong>Clubs:</strong> ${member.clubs}
        <p><strong> Current Job:</strong> ${member.role}</p>
      `;

      container.appendChild(memberCard);
    });
}

