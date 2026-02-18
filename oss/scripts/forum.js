import { getMembers, displayMembers } from "./components.mjs";

getMembers().then(displayMembers);

const membersBtn = document.getElementById("membersBtn");
const conversationsBtn = document.getElementById("conversationsBtn");
const membersSection = document.querySelector(".members");
const conversationsSection = document.querySelector(".conversations");

membersBtn.addEventListener("click", () => {
    membersSection.style.display = "grid";
    conversationsSection.style.display = "none";
    membersBtn.classList.add("current");
    conversationsBtn.classList.remove("current");
});

conversationsBtn.addEventListener("click", () => {
    membersSection.style.display = "none";
    conversationsSection.style.display = "grid";
    conversationsBtn.classList.add("current");
    membersBtn.classList.remove("current");
});

// Initialize with members visible
membersSection.style.display = "grid";
conversationsSection.style.display = "none";


const dialog = document.querySelector("dialog");
const returnBtn = document.getElementById("return");

let isMember = false; // change based on real authentication

conversationsBtn.addEventListener("click", () => {

    if (!isMember) {
        membersSection.style.display = "none";
        conversationsSection.style.display = "grid";
        conversationsBtn.classList.add("current");
        membersBtn.classList.remove("current");

        dialog.showModal();
        return;
    }

    membersSection.style.display = "none";
    conversationsSection.style.display = "grid";
    conversationsBtn.classList.add("current");
    membersBtn.classList.remove("current");
});

returnBtn.addEventListener("click", () => {
    dialog.close();
    membersSection.style.display = "grid";
    conversationsSection.style.display = "none";
    membersBtn.classList.add("current");
    conversationsBtn.classList.remove("current");

});
