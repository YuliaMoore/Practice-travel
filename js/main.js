// import "./modal.js";
// import "./slider.js";

// ======== Відкриття модалок ========

document.querySelectorAll("[data-modal-open]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.modalOpen;
    const modal = document.getElementById(id);
    modal.classList.add("active");

    // Ініціалізуємо Swiper при відкритті
    if (!modal.dataset.swiperInited) {
      initModalSwiper(id);
      modal.dataset.swiperInited = "true";
    }
  });
});

// Закриття
document.querySelectorAll("[data-modal-close]").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").classList.remove("active");
  });
});

// Клік поза модалкою
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });
});

// ======== Ініціалізація Swiper для модальних вікон ========

function initModalSwiper(id) {
  new Swiper(`#${id} .modal-swiper`, {
    loop: false,
    navigation: {
      nextEl: `#${id} .swiper-button-next`,
      prevEl: `#${id} .swiper-button-prev`,
    },
    pagination: {
      el: `#${id} .swiper-pagination`,
      clickable: true,
    },
  });
}
