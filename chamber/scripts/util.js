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
