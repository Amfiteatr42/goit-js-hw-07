import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

function markupMaker(galleryData) {
  return galleryData
    .map(({ preview = "", original = "", description = "" } = {}) => {
      return `
    <li>
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>`;
    })
    .join("");
}

galleryRef.innerHTML = markupMaker(galleryItems);

let galleryModal = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
