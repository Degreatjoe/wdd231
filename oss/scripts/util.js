const today = new Date();
const year = today.getFullYear();

document.getElementById('year').textContent = year;
document.getElementById('lastmodified').textContent = `Last modified: ${document.lastModified}`;

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});