let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("slide-fade");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2800); // Change slide every 5 seconds (adjust as needed)
}

showSlides(); // Start the slideshow
