const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.style.display =
        navMenu.style.display === "block" ? "none" : "block";
});


document.getElementById("lastModified").innerHTML = document.lastModified;
const today = new Date()
document.getElementById("currentYear").innerHTML = today.getUTCFullYear()