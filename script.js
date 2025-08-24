// Toggle mobile menu
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});


// Portfolio Slider
const slides = document.querySelector(".slides");
const slideItems = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

// Show slide
function showSlide(i) {
  index = (i + slideItems.length) % slideItems.length;
  slides.style.transform = `translateX(${-index * 100}%)`;
}

// Manual navigation
nextBtn.addEventListener("click", () => showSlide(index + 1));
prevBtn.addEventListener("click", () => showSlide(index - 1));

// Auto slide
setInterval(() => {
  showSlide(index + 1);
}, 4000); // slides every 4 seconds
