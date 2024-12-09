document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel");
  carousels.forEach((carousel) => {
    const slides = carousel.querySelectorAll(".carousel-slide");
    const prevButton = carousel.closest(".carousel-wrapper").querySelector(".carousel-nav.prev");
    const nextButton = carousel.closest(".carousel-wrapper").querySelector(".carousel-nav.next");
    const indicators = carousel.closest(".carousel-wrapper").querySelectorAll(".indicator");
    const slideWidth = 360; // Width of the image
    const slideMargin = 20; // Margin-right value
    let currentIndex = 0;

    function updateCarousel() {
      const scrollAmount = currentIndex * (slideWidth + slideMargin);
      carousel.style.transform = `translateX(-${scrollAmount}px)`;

      slides.forEach((slide, index) => {
        if (index === currentIndex) {
          slide.classList.add("active");
          slide.classList.remove("inactive");
        } else {
          slide.classList.add("inactive");
          slide.classList.remove("active");
        }
      });

      indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentIndex);
      });
    }

    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });

    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    });

    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
      });
    });

    updateCarousel();
  });
});
