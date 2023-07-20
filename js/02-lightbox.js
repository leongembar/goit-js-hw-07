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
                <img class="gallery__image" 
                     src="${item.preview}" 
                     alt="${item.description}" 
                />
            </a>
        </li>
        `
    )
    .join("");
}

containerEl.innerHTML = makeStringGallegy(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', 
{
  captionsData: 'alt',
  captionDelay:250,
});