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

pictureEl.addEventListener("click", (event) => event.preventDefault());

containerEl.addEventListener("click", onShowModal);

// let stringModal = "";

// const instance = basicLightbox.create(stringModal);

function onShowModal(e) {
  const swatchEl = e.target;
  //   swatchEl.closest(".gallery__link").preventDefault;
  //   console.log(swatchEl.closest(".gallery__link"));

  if (swatchEl.tagName === "IMG") {
    const urlBigPhoto = swatchEl.dataset.source;
    console.log(urlBigPhoto);
    const instance = basicLightbox.create(`
        <img 
            class="gallery__image"
            src="${urlBigPhoto}"
        />
     `);
    // stringModal = `
    //     <img
    //         class="gallery__image"
    //         src="${urlBigPhoto}"
    //     />
    // `;

    instance.show();
  }
}

document.addEventListener("keydown", onCloseModal);

function onCloseModal(e) {
  if (basicLightbox.visible()) {
    if (e.code === "Escape") {
      basicLightbox.close();
    }
  }
}
