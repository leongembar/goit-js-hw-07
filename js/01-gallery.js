import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const containerEl = document.querySelector(".gallery");

function makeStringGallegy(galleryItems) {
  return galleryItems
    .map(
      (item) =>
        `
    <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img 
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
            />
        </a>
    </li>
    `
    )
    .join("");
}

containerEl.innerHTML = makeStringGallegy(galleryItems);

const pictureEl = document.querySelector(".gallery__link");

containerEl.addEventListener("click", onShowModal);

function onShowModal(e) {
  e.preventDefault();
  const swatchEl = e.target;

  if (swatchEl.tagName === "IMG") {
    const urlBigPhoto = swatchEl.dataset.source;
    const instance = basicLightbox.create(`
        <img 
            class="gallery__image"
            src="${urlBigPhoto}"
        />
     `);
    

    instance.show();

    document.addEventListener("keydown", onCloseModal);

    function onCloseModal(e) {
      
        if (e.code === "Escape") {
          instance.close();
          document.removeEventListener("keydown", onCloseModal);
        }
      }
  }
}


