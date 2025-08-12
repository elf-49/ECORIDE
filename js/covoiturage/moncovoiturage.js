let currentIndex = 0;
  const carousel = document.getElementById("carousel");
  const cards = document.querySelectorAll(".card");

  function updateCarousel() {
    const offset = -currentIndex * 500; // hauteur d'une carte
    carousel.style.transform = `translateY(${offset}px)`;
  }

  function nextCard() {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  }

  function prevCard() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }