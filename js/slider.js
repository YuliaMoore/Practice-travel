function initSlider(slider) {
  const track = slider.querySelector(".slider-track");
  const slides = slider.querySelectorAll(".slide");
  const btnPrev = slider.querySelector(".prev");
  const btnNext = slider.querySelector(".next");
  const dotsContainer = slider.querySelector(".slider-dots");

  let index = 0;

  // Створюємо крапки
  dotsContainer.innerHTML = "";
  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("slider-dot");
    if (i === 0) dot.classList.add("active");
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".slider-dot");

  const update = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d) => d.classList.remove("active"));
    dots[index].classList.add("active");
  };

  btnNext?.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    update();
  });

  btnPrev?.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    update();
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      index = Number(dot.dataset.index);
      update();
    });
  });
}

//Для модальних вікон

document
  .querySelectorAll('.slider[data-slider="tour-slider"]')
  .forEach((slider) => {
    initSlider(slider);
  });
