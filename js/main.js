// import "./modal.js";
// import "./slider.js";

// ======== Відкриття модалок ========
let activeModal = null; // зберігає активну модалку

document.querySelectorAll("[data-modal-open]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.modalOpen;
    const modal = document.getElementById(id);

    // Закриваємо попередню активну модалку, якщо вона існує
    if (activeModal && activeModal !== modal) {
      activeModal.classList.remove("active");
    }

    // Відкриваємо цільову модалку
    modal.classList.add("active");
    activeModal = modal;

    // Ініціалізуємо Swiper при відкритті
    if (!modal.dataset.swiperInited) {
      initModalSwiper(id);
      modal.dataset.swiperInited = "true";
    }
  });
});

// ======== Закриття модалок ========
document.querySelectorAll("[data-modal-close]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");

    if (activeModal === modal) activeModal = null;
  });
});

// Клік поза модалкою
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      if (activeModal === modal) activeModal = null;
    }
  });
});

// ======== Ініціалізація Swiper для модальних вікон ========
function initModalSwiper(id) {
  const swiper = new Swiper(`#${id} .modal-swiper`, {
    loop: false,
    pagination: {
      el: `#${id} .swiper-pagination`,
      clickable: true,
    },
    navigation: {
      nextEl: `#${id} .swiper-button-next`,
      prevEl: `#${id} .swiper-button-prev`,
    },
    on: {
      init() {
        updateBullets(id, this.activeIndex);
      },
      slideChange() {
        updateBullets(id, this.activeIndex);
      },
    },
  });
}

/* Логіка підсвічування всіх кружечків до активного */
function updateBullets(id, activeIndex) {
  const bullets = document.querySelectorAll(`#${id} .swiper-pagination-bullet`);

  bullets.forEach((bullet, index) => {
    if (index <= activeIndex) {
      bullet.classList.add("active-chain");
    } else {
      bullet.classList.remove("active-chain");
    }
  });
}

// ======= SWIPER ДЛЯ ГАЛЕРЕЇ =======
new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: ".gallery-button-next",
    prevEl: ".gallery-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
});
