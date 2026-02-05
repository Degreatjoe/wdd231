import { places } from "../data/places.mjs";

const container = document.querySelector("#discover-cards");

places.forEach((place, index) => {
  const card = document.createElement("section");
  card.classList.add("place_card");
  card.style.gridArea = `place_card${index + 1}`;

  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="${place.image}" alt="${place.name}" loading="lazy">
    </figure>
    <div class="place-info">
        <p>${place.description}</p>
        <br>
        <address>${place.address}</address>
    </div>
    <button class="learn">Learn More</button>
  `;

  container.appendChild(card);
});


// visitors message
const message = document.querySelector("#visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  message.innerHTML = "<p>Welcome! Let us know if you have any questions.</p>";
} else {
  const diffDays = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

  if (diffDays < 1) {
    message.innerHTML = "<p>Back so soon! Awesome!</p>";
  } else if (diffDays === 1) {
    message.innerHTML = "<p>You last visited 1 day ago.</p>";
  } else {
    message.innerHTML = `<p>You last visited ${diffDays} days ago.</p>`;
  }
}

localStorage.setItem("lastVisit", now);

setTimeout(() => {
  message.style.opacity = "0";
  setTimeout(() => {
    message.style.display = "none";
  }, 500);
}, 1500);
