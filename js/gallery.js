// Масив зображень (8 штук)
const images = [
  "../images/gallery/gallery1.jpg",
  "../images/gallery/gallery2.jpg",
  "../images/gallery/gallery3.jpg",
];

const gallery = document.getElementById("gallery");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let page = 0; // поточна сторінка
const perPage = 2; // по 2 фото

function renderGallery() {
  gallery.innerHTML = "";

  // Вирізаємо 2 фото для поточної сторінки
  const start = page * perPage;
  const slice = images.slice(start, start + perPage);

  slice.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    gallery.appendChild(img);
  });

  // Блокування кнопок на краях
  prevBtn.disabled = page === 0;
  nextBtn.disabled = (page + 1) * perPage >= images.length;
}

// Кнопки
prevBtn.addEventListener("click", () => {
  if (page > 0) {
    page--;
    renderGallery();
  }
});

nextBtn.addEventListener("click", () => {
  if ((page + 1) * perPage < images.length) {
    page++;
    renderGallery();
  }
});

// Стартовий рендер
renderGallery();
