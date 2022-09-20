import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

function markupMaker(galleryData) {
  return galleryData
    .map(({ preview = "", original = "", description = "" } = {}) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

galleryRef.innerHTML = markupMaker(galleryItems);

galleryRef.addEventListener("click", onModalOpen);

function onModalOpen(e) {
  event.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const galleryModal = basicLightbox.create(`
  <img width="1400" height="900" src="${e.target.dataset.source}">`);
  galleryModal.show();

  window.addEventListener(
    "keydown",
    (e) => {
      if (e.code === "Escape") {
        galleryModal.close();
      }
    },
    { once: true }
  );
}
