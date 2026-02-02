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

document.getElementById("timestamp").value = new Date().toISOString();



const params = new URLSearchParams(window.location.search);

document.getElementById("name").textContent =
  `${params.get("fname")} ${params.get("lname")}`;

document.getElementById("email").textContent = params.get("email");
document.getElementById("phone").textContent = params.get("phone");
document.getElementById("business").textContent = params.get("business");
document.getElementById("timestamp").textContent = params.get("timestamp");
