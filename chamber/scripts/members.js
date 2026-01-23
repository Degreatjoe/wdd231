const membersContainer = document.querySelector(".members");
const gridBtn = document.getElementById("grid-view");
const listBtn = document.getElementById("list-view");

/* FETCH MEMBERS */
async function getMembers() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayMembers(data);
}

function displayMembers(members) {
    members.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        membersContainer.appendChild(card);
    });
}

/* TOGGLE VIEWS */
gridBtn.addEventListener("click", () => {
    membersContainer.classList.remove("list");
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
});

listBtn.addEventListener("click", () => {
    membersContainer.classList.add("list");
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
});

/* FOOTER DATES */
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

/* INIT */
getMembers();
