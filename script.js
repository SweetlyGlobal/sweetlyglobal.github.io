// Get all slide elements and store in an array
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dotsContainer");


// Get navigation buttons by their IDs
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// Current index of the active slide
let current = 0;

// Automatically change slide every 10 seconds
let slideInterval = setInterval(nextSlide, 6000);

/**
 * Shows a slide at a specific index and hides others
 * @param {number} index - index of the slide to show
 */
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].innerText = "●"; // Filled for non-active
  });

  slides[index].classList.add("active");
  dots[index].innerText = "○"; // Hollow for active
}
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.innerText = "●"; // Filled dot initially
  dot.addEventListener("click", () => {
    current = i;
    showSlide(current);
    resetTimer();
  });
  dotsContainer.appendChild(dot);
});

/**
 * Moves to the next slide
 */
function nextSlide() {
  current = (current + 1) % slides.length; // Loop back to 0 if at the end
  showSlide(current);
}

/**
 * Moves to the previous slide
 */
function prevSlide() {
  current = (current - 1 + slides.length) % slides.length; // Loop to last slide if at start
  showSlide(current);
}

// When user clicks "Next", show next slide and reset the timer
nextBtn.addEventListener("click", () => {
  nextSlide();
  resetTimer();
});

// When user clicks "Back", show previous slide and reset the timer
prevBtn.addEventListener("click", () => {
  prevSlide();
  resetTimer();
});

/**
 * Resets the auto-change timer when user manually navigates
 */
function resetTimer() {
  clearInterval(slideInterval); // Stop the existing timer
  slideInterval = setInterval(nextSlide, 6000); // Start a new 10s timer
}
const dots = document.querySelectorAll(".dot");
