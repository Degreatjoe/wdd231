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
