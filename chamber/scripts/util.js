// menu toggle
const menuButton = document.querySelector(".menu-icon");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});


// footer dates
let lastModified = document.getElementById("lastModified");
lastModified.textContent = document.lastModified;


// copyright year
let yearSpan = document.getElementById("year");
let currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;




const modalTriggers = document.querySelectorAll("[data-modal]");
const closeButtons = document.querySelectorAll(".close-modal");

modalTriggers.forEach(trigger => {
  trigger.addEventListener("click", () => {
    const dialog = document.getElementById(trigger.dataset.modal);
    if (dialog) dialog.showModal();
  });
});

closeButtons.forEach(button => {
  button.addEventListener("click", () => {
    button.closest("dialog")?.close();
  });
});

document.querySelectorAll("dialog").forEach(dialog => {
  dialog.addEventListener("click", e => {
    if (e.target === dialog) dialog.close();
  });
});

