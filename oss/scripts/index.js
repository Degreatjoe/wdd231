import { getMembers, displaySpotlight } from "./components.mjs";
import { news } from "../data/news.mjs";
import { events } from "../data/event.mjs";

getMembers().then(displaySpotlight);


const eventSection = document.querySelector(".event");
const newsSection = document.querySelector(".news");

function displayEvents() {
  events.forEach(event => {
    eventSection.innerHTML += `
      <article class="event-card">
        <h3>${event.title}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p>${event.description}</p>
      </article>
    `;
  });
}

function displayNews() {
  news.forEach(item => {
    newsSection.innerHTML += `
      <article class="news-card">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `;
  });
}

displayEvents();
displayNews();

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".right");
const prevBtn = document.querySelector(".left");

let index = 0;
let interval;

function updateSlide() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
}

function startAutoSlide() {
  interval = setInterval(nextSlide, 3000); // 3 sec pause
}

function resetAutoSlide() {
  clearInterval(interval);
  startAutoSlide();
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

startAutoSlide();
