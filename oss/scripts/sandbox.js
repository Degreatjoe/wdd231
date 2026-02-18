import { likes, commentCount, replyCount } from "./forum.mjs";

// --- Rating Logic ---
const ratingbox = document.getElementById("rating");

function RatingView(stars = 5) {
    return Array.from({ length: stars }, (_, i) => {
        const value = stars - i; 
        return `
            <input type="radio" id="star${value}" name="rating" value="${value}">
            <label for="star${value}" style="cursor:pointer; font-size: 20px;">★</label>
        `;
    }).join("");
}

if (ratingbox) ratingbox.innerHTML = RatingView(3);

// --- Dialog Functionality ---
const dialog = document.getElementById("comment-dialog");
const closeBtn = document.getElementById("close-dialog");

function openMyDialog(postId) {
    if (dialog) {
        console.log("Opening comments for post:", postId);
        // Here you could fetch specific post data based on ID
        dialog.showModal(); 
    }
}

if (closeBtn) {
    closeBtn.addEventListener("click", () => dialog.close());
}

// --- Injecting Icons ---
// Note: 'post' should come from your JSON data loop. 
// Using placeholder values for this drop-in:
const mockPostId = 1;
const mockCommentCount = 15;

document.getElementById("like").appendChild(likes(10));

// FIXED: Using appendChild and passing the callback
document.getElementById("comment").appendChild(
    commentCount(mockCommentCount, () => openMyDialog(mockPostId))
);

document.getElementById("reply").appendChild(replyCount(2));




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
